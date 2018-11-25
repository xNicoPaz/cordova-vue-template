import Vue from 'vue'
import Vuex from 'vuex'
import _public from '../app/public/vuex'
import img from '../app/img/vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        _public: _public,
        img: img
    }
})