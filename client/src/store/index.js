import Vue from 'vue'
import Vuex from 'vuex'
import socket from './modules/socket'
import game from './modules/game'
import link from '../lib/link'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoaded: false,
    showHelp: false, // TODO: do something with this
    requestToLeave: false, // TODO: do something with this
  },
  mutations: {
    load(state, {userId, game}) {
      if (game) {
        state.game.path = game.path
        if (window.location.href !== link(game.path)) {
          window.history.pushState(null, '', '/' + game.path)
        }

        game.players.forEach((player) => {
          Vue.set(state.game.players, player.id, player)
        })
        game.teams.forEach((team) => {
          Vue.set(state.game.teams, team.id, team)
        })
        state.game.master = game.master
        state.game.entriesPerPlayer = game.entriesPerPlayer

        state.game.isStarted = game.isStarted
        state.game.isFinished = game.isFinished

        state.game.turnTime = game.turnTime
        state.game.scorePerEntry = game.scorePerEntry
        state.game.roundStarted = game.roundStarted
        state.game.roundFinished = game.roundFinished

        state.game.activeTeam = game.activeTeam
        state.game.activePlayer = game.activePlayer
        state.game.nextTeam = game.nextTeam
        state.game.nextPlayer = game.nextPlayer
        state.game.turnStarted = game.turnStarted
        state.game.turnFinished = game.turnFinished
        state.game.activeEntry = game.activeEntry
        state.game.turnTimeLeft = game.turnTimeLeft

        state.game.player = state.game.players[userId]

        state.game.font = game.font
        state.game.entries = game.entries

        state.game.isCreated = true
      } else {
        state.game.player.id = userId
      }

      state.isLoaded = true
    },
    redirectToGame(state, path) {
      window.location.href = '/' + path
    },
    leaveGame() {
      window.location.href = '/'
    },
    requestToLeave(state) {
      state.requestToLeave = true
    },
    stayInCurrentGame(state) {
      state.requestToLeave = false
    },
    toggleHelp(state) {
      state.showHelp = !state.showHelp
    },
  },
  modules: {
    socket,
    game,
  },
})
