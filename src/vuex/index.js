import Vue from 'vue'
import Vuex from 'vuex'
import _public from '../app/public/vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        _public: _public
    }
})