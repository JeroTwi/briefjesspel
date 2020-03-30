import msg from '../../lib/msg'
import randomFont from '../../lib/random-font'

export default {
  state: {
    // game initialization
    isLoaded: false, // whether we've received the first response from the server
    isCreated: false, // whether there's actually a game on the server
    path: null,

    // settings for game
    players: [],
    teams: [],
    master: null,
    entriesPerPlayer: null,
    turnOrder: [],

    // state of game
    isStarted: false,
    isFinished: false,

    // settings for round
    turnTime: null, // in seconds
    scorePerEntry: 1, // for now hardcoded

    // state of round
    roundStarted: false,
    roundFinished: false,

    // state of turn
    activeTeam: null,
    activePlayer: null,
    nextTeam: null,
    nextPlayer: null,
    turnStarted: false,
    turnFinished: false,
    activeEntry: null, // only for active player
    turnTimeLeft: null, // in seconds

    // public settings for player
    player: {
      id: null,
      name: null,
      teamId: null,
      isReady: false,
    },

    // private settings for player
    font: null,
    entries: [],
  },
  getters: {
    isMaster: (state) => {
      return state.master === state.player.id
    },
    master: (state) => {
      return state.players.find(user => user.id === state.master)
    },
    shareableLink: (state) => {
      return state.path ? `${window.location.protocol}//${window.location.host}/${state.path}` : null
    },
    team: (state) => {
      return state.player.teamId ? state.teams.find(team => team.id === state.player.teamId) : null
    },
    visiblePlayers: (state) => {
      return state.players.filter(player => player.name)
    },
    canStart: (state) => {
      return state.players.every(player => player.isReady && player.teamId)
    },
    myTurn: (state) => {
      return state.activePlayer === state.player.id
    },
  },
  mutations: {
    // Messages from server
    setPath(state, path) {
      state.path = path
    },
    addPlayer(state, player) {
      state.players.push(player)
    },
    setPlayerName(state, {id, name}) {
      const player = state.players.find(p => p.id === id)
      if (player) {
        player.name = name
      }
    },
    removePlayer(state, id) {
      const index = state.players.findIndex(p => p.id === id)
      if (index > -1) {
        this.players.splice(index, 1)
      }
      if (id === state.player.id) {
        // TODO
        state.isCreated = false
      }
    },
    setEntriesPerPlayer(state, entriesPerPlayer) {
      state.entriesPerPlayer = entriesPerPlayer
    },
    addTeam(state, team) {
      state.teams.push(team)
    },
    addPlayerToTeam(state, {id, teamId}) {
      const player = state.players.find(p => p.id === id)
      if (player) {
        player.teamId = teamId
      }
    },
    setPlayerReady(state, id) {
      const player = state.players.find(p => p.id === id)
      if (player) {
        player.isReady = true
      }
    },
    setTurnTime(state, turnTime) {
      state.turnTime = turnTime
    },
    startGame(state) {
      state.isStarted = true
    },
    startRound(state, {activeTeam, activePlayer}) {
      state.activeTeam = activeTeam
      state.activePlayer = activePlayer
      state.roundStarted = true
    },
    finishGame(state) {
      state.isFinished = true
    },

    // Only for local use
    newGame(state) {
      state.master = state.player.id
      state.players.push(state.player)
      state.isCreated = true
    },
    setName(state, name) {
      state.player.name = name
    },
    setFont(state, font) {
      state.font = font
    },
    addEntry(state, entry) {
      state.entries.push(entry)
    },
  },
  actions: {
    async newGame({commit, dispatch}) {
      await dispatch(msg('newGame'))
      commit('newGame')
    },
    async setPlayerName({commit, dispatch}, name) {
      if (name) {
        await dispatch(msg('setPlayerName', name))
        commit('setName', name)
        dispatch('setFont', randomFont()) // TODO: add option for user?
      }
    },
    async setFont({commit, dispatch}, font) {
      if (font) {
        await dispatch(msg('setFont', font))
        commit('setFont', font)
      }
    },
    async setEntriesPerPlayer({commit, dispatch}, entriesPerPlayer) {
      if (entriesPerPlayer) {
        await dispatch(msg('setEntriesPerPlayer', entriesPerPlayer))
        commit('setEntriesPerPlayer', entriesPerPlayer)
      }
    },
    async addEntry({commit, dispatch}, entry) {
      if (entry) {
        await dispatch(msg('addEntry', entry))
        commit('addEntry', entry)
      }
    },
    async addTeam({commit, dispatch}, name) {
      if (name) {
        dispatch(msg('addTeam', name))
      }
    },
    async addPlayerToTeam({commit, dispatch}, {id, teamId}) {
      if (id && teamId) {
        await dispatch(msg('addPlayerToTeam', {id, teamId}))
        commit('addPlayerToTeam', {id, teamId})
      }
    },
    async setTurnTime({commit, dispatch}, turnTime) {
      if (turnTime) {
        await dispatch(msg('setTurnTime', turnTime))
        commit('setTurnTime', turnTime)
      }
    },
    async startGame({dispatch}) {
      dispatch(msg('startGame'))
    },
  },
}
