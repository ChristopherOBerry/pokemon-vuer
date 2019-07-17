import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemon:[],
    activePokemon: {}
  },
  mutations: {
    setPokemon(state,data){
      state.pokemon = data
    },
    setActivePokemon(state,data){
      state.activePokemon = data
    }
  },
  actions: {
    async search ({dispatch, commit}, query){
      try {
        let res = await api.get(query)
        console.log(res.data)
        console.log(res.data.sprites.front_default)
        commit("setPokemon", res.data)
        
      } catch (err) {
        console.error(err)
      }
    },
    setActivePokemon({commit, dispatch},pokemon){
      commit('setActivePokemon', pokemon)
    }
  }
})
