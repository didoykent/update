import Vue from 'vue'
/*import App from './App'*/
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Home from './components/Home.vue'
import router from './router'
import SignIn from './components/SignIn.vue'

import Books from './components/Books'

Vue.use(Vuetify)

/*Vue.config.productionTip = false*/

const app = new Vue({
el: '#app',
template: '<Books></Books>',
components: {Books},
router
})
