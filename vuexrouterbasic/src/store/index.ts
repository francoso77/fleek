import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  /*
  Estado da Aplicação
  Alterado por Mutations
  Toda alteração no State geram renders
  */
  state: {
    nome: 'Frank',
    empresa: 'JB Textil',
    logado: false
  },
  /*
Objeto de somente leitura da aplicação
*/
  getters: {

    nomeMaiusculo: (state, _getters) => {
      return state.nome.toLowerCase()
    }
  },
  /*
Alteração no estado da Aplicação - Somente devem ocorrer dentro das Mutations
Execução de Forma síncrona
Acionado atráves de 'commit'
*/
  mutations: {
    alterarEstadoLogin: (state, payload) => {
      state.logado = payload
    }
  },
  /*
Ação realizada atráves de um 'Dispatch'
Pode executar tarefas assíncronas
Encarregado de disparar Mutations caso realize alterações de estado da aplicação
*/
  actions: {
    login: (context, _payload) => {
      context.commit('alterarEstadoLogin', true)
    },
    logout: (context, _payload) => {
      context.commit('alterarEstadoLogin', false)
    }
  },
  /*
Construir Divisões via class (componetizar) a Aplicação dentro da store
*/
  modules: {
  }
})
