const uuid = require('uuid')
const EventEmitter = require('events').EventEmitter
const randomString = require('../lib/random-string')
const shuffle = require('../lib/shuffle')

class Game extends EventEmitter {
  constructor(data = {}) {
    super()

    // identifiers
    this.id = data.id || uuid.v4()
    this.path = data.path || randomString(10, true)

    // timestamps
    this.createdAt = data.createdAt || new Date()
    this.updatedAt = data.updatedAt || new Date()

    // settings for game
    this.master = data.master || null
    this.players = data.players || new Map()
    this.removedPlayers = data.removedPlayers || new Map()
    this.teams = data.teams || new Map()
    this.entriesPerPlayer = data.entriesPerPlayer || 0
    this.entries = data.entries || []
    this.turnOrder = data.turnOrder || []

    // state of game
    this.isStarted = data.isStarted || false
    this.isFinished = data.isFinished || false

    // settings for round
    this.turnTime = data.turnTime || 0 // in seconds
    this.scorePerEntry = data.scorePerEntry || 1

    // state of round
    this.entriesRemaining = data.entriesRemaining || []
    this.roundStarted = data.roundStarted || false
    this.roundFinished = data.roundFinished || false

    // state of turn
    this.turnStarted = data.turnStarted || false
    this.turnFinished = data.turnFinished || false
    this.turnTimeLeft = data.turnTimeLeft || 0 // in seconds
  }


  // getters

  get canStart() {
    return !this.isStarted && Array.from(this.players.values())
      .every((user) => user.isReady && user.teamId)
  }

  get canStartRound() {
    return this.isStarted && !this.roundStarted && this.turnTime && this.scorePerEntry
  }

  get canStartTurn() {
    return this.roundStarted && !this.turnStarted && this.entriesRemaining.size
  }

  get activeTeam() {
    return this.turnOrder.size ? this.turnOrder[0].teamId : null
  }

  get activePlayer() {
    return this.turnOrder.size ? this.turnOrder[0].players[0] : null
  }

  get nextTeam() {
    return this.turnOrder.size > 1 ? this.turnOrder[1].teamId : null
  }

  get nextPlayer() {
    return this.turnOrder.size > 1 ? this.turnOrder[1].players[0] : null
  }

  get activeEntry() {
    // entriesRemaining functions like a stack
    return this.entriesRemaining[this.entriesRemaining.length - 1]
  }


  // public methods

  addPlayer(user, isMaster = false) {
    if (!this.players.has(user.id)) {
      this.players.set(user.id, user)

      if (isMaster) {
        this.master = user.id
      }

      this.emit('playerAdded', user)
    }
  }

  setPlayerName(userId, name) {
    if (this.players.has(userId)) {
      const user = this.players.get(userId)
      user.name = name

      this.emit('playerNameSet', user)

      this._checkPlayerReady(user)
    }
  }

  setFont(userId, font) {
    if (this.players.has(userId)) {
      const user = this.players.get(userId)
      user.font = font

      this.emit('playerFontSet', user)
    }
  }

  removePlayer(userId, byHimself = false) {
    if (this.players.has(userId) && this.activePlayer !== userId) {
      this.players.delete(userId)

      this.turnOrder.forEach((team) => {
        team.players = team.players.filter(id => id !== userId)
      })

      if (userId === this.master && this.players.size) {
        this.master = this.players.values().next().value.id
      }

      if (byHimself) {
        this.emit('playerLeft', userId)
      } else {
        this.removedPlayers.set(userId, userId)
        this.emit('playerRemoved', userId)
      }
    }
  }

  setEntriesPerPlayer(entriesPerPlayer) {
    this.entriesPerPlayer = entriesPerPlayer

    this.emit('entriesPerPlayerUpdated')
  }

  addEntry(userId, entry) {
    if (this.players.has(userId)) {
      const user = this.players.get(userId)
      user.entries.push(entry)

      this._checkPlayerReady(user)
    }
  }

  addTeam(team) {
    this.teams.set(team.id, team)

    this.emit('teamAdded', team)
  }

  addPlayerToTeam(userId, teamId) {
    if (this.players.has(userId) && this.teams.has(teamId)) {
      const user = this.players.get(userId)
      user.teamId = teamId

      this.emit('playerAddedToTeam', user)
    }
  }

  removeTeam(teamId) {
    if (this.teams.has(teamId) && this.activeTeam !== teamId) {
      this.teams.delete(teamId)

      this.turnOrder = this.turnOrder.filter(team => team.teamId !== teamId)

      for (const user in this._playersForTeam(teamId)) {
        user.teamId = null
      }

      this.emit('teamRemoved', teamId)
    }
  }

  setTurnTime(turnTime) {
    this.turnTime = turnTime

    this.emit('turnTimeUpdated')
  }

  start() {
    if (this.canStart) {
      this._fillEntries()

      this.isStarted = true

      this.emit('started')

      this.startRound()
    }
  }

  startRound() {
    if (this.canStartRound) {
      this._randomizeTurnOrder()
      this._randomizeEntries()

      this.turnTimeLeft = this.turnTime
      this.roundStarted = true

      this.emit('roundStarted')
    }
  }

  startTurn() {
    if (this.canStartTurn) {
      this._startTimer()

      this.turnStarted = true

      this.emit('turnStarted')
    }
  }

  nextEntry() {
    this._score()
    this.entriesRemaining.pop()

    if (this.entriesRemaining.size) {
      this.emit('nextEntry')
    } else {
      this.finishRound()
    }
  }

  finishTurn() {
    this.turnFinished = true

    this._randomizeEntries()

    this.emit('turnFinished')
  }

  nextTurn() {
    this._shiftTurn()

    this.turnStarted = false
    this.turnFinished = false
    this.turnTimeLeft = this.turnTime

    this.emit('nextTurn')
  }

  finishRound() {
    clearInterval(this.timer)
    this.roundFinished = true

    this.emit('roundFinished')
  }

  nextRound() {
    this.roundStarted = false
    this.roundFinished = false
    this.turnTimeLeft = this.turnTime

    this.emit('nextRound')
  }

  finish() {
    this.isFinished = true

    this.emit('finished')
  }


  // private methods

  _playerIsReady(user) {
    return user.name && this.entriesPerPlayer && user.entries.size === this.entriesPerPlayer
  }

  _checkPlayerReady(user) {
    if (!user.isReady && this._playerIsReady(user)) {
      user.isReady = true
      this.emit('playerReady', user)
    }
  }

  _fillEntries() {
    // put all of the player's entries into the game
    // this prevents losing entries if a player leaves the game
    for (const user in this.players.values()) {
      for (const entry in user.entries) {
        this.entries.push(entry)
      }
    }
  }

  _playersForTeam(teamId) {
    return Array.from(this.players.values())
      .filter(user => user.teamId === teamId)
  }

  _randomizeTurnOrder() {
    this.turnOrder = []

    for (const team in this.teams.values()) {
      this.turnOrder.push({
        teamId: team.id,
        players: shuffle(this._playersForTeam(team.id).map(user => user.id))
      })
    }

    shuffle(this.turnOrder)
  }

  _randomizeEntries() {
    this.entriesRemaining = [...this.entries]
    shuffle(this.entriesRemaining)
  }

  _startTimer() {
    this.timer = setInterval(() => {
      this.turnTimeLeft--

      if (this.turnTimeLeft === 0) {
        clearInterval(this.timer)

        this.finishTurn()
      }
    }, 1000)
  }

  _score() {
    const team = this.teams.get(this.activeTeam)
    if (team) {
      team.score += this.scorePerEntry

      this.emit('teamScored', team)
    }
  }

  _shiftTurn() {
    const team = this.turnOrder.shift()
    team.push(team.players.shift())
    this.turnOrder.push(team)
  }


  // data getters

  get playerData() {
    return Array.from(this.players.values())
      .map(user => user.data)
  }

  get teamData() {
    return Array.from(this.teams.values())
      .map(team => team.data)
  }

  get data() {
    return {
      path: this.path,

      players: this.playerData,
      teams: this.teamData,
      master: this.master,
      entriesPerPlayer: this.entriesPerPlayer,
      turnOrder: this.turnOrder,

      isStarted: this.isStarted,
      isFinished: this.isFinished,

      turnTime: this.turnTime,
      scorePerEntry: this.scorePerEntry,
      roundStarted: this.roundStarted,
      roundFinished: this.roundFinished,

      activeTeam: this.activeTeam,
      activePlayer: this.activePlayer,
      turnStarted: this.turnStarted,
      turnFinished: this.turnFinished,
      turnTimeLeft: this.turnTimeLeft,
      nextTeam: this.nextTeam,
      nextPlayer: this.nextPlayer,
    }
  }

  dataForUser(userId) {
    const gameData = this.data

    if (this.players.has(userId)) {
      const user = this.players.get(userId)
      gameData.font = user.font
      gameData.entries = user.entries
      if (this.activePlayer === userId) {
        gameData.activeEntry = this.activeEntry
      }
    }

    return gameData
  }


  // event handling

  emit(event, args) {
    // always save when emitting
    this.save()

    return super.emit(event, args)
  }

  save() {
    this.updatedAt = new Date()

    // TODO
  }
}

module.exports = Game
