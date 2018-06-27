import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

    const state = {
      fromShow: false     //首页弹出付费层状态
    }

    const mutations={
      Fshow(state){
        state.fromShow = 1;
        localStorage.setItem("fromShow", state.fromShow);	
      },
      Fhide(state){
        state.fromShow = 0;
        localStorage.setItem("fromShow", state.fromShow);
      }
    }

    const actions = {
      FshowAction(context){
        context.commit('Fshow')
    },
      FhideAction(context){
        context.commit('Fhide')
    },
    }

    const getters = {

    }

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
  })