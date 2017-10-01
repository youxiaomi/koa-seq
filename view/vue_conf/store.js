import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    store_text: "store 文本。。。。"
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
});

export default store;