import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        islogin: false
    },
    mutations: {
        login(state,name) {
            state.islogin = true

            localStorage.setItem('islogin', true)
            localStorage.setItem('y_name', name)

            let expires = new Date(new Date().getTime() + 1000 * 3600 * 24 * 365*10)
            document.cookie = "y_name" + "=" + name + ";expires="+expires

            console.log(name+'login OK')
        },
        logout(state) {
            state.islogin = false

            localStorage.setItem('islogin', false)
            localStorage.setItem('y_name', null)

            let expires = new Date(new Date().getTime() + 1000 * 3600 * 24 * 365*10)
            document.cookie = "y_name" + "=" + null + ";expires="+expires

            console.log('logout success')
        }
    }
})

export default store