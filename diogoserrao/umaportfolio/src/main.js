import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import SegundaPagina from './views/SegundaPagina.vue'
import Home from './views/Home.vue'
import { createRouter, createWebHistory} from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import NotFound from './views/NotFound.vue'
const routes = [
    { path: '/', component: Home },
    { path: '/segunda', component: SegundaPagina },
    { path: '/:pathMatch(.*)*', component: NotFound}
  ]
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes, 
  })
library.add(faArrowRight)
library.add(faMoon)
library.add(faSun)

createApp(App)
.use(router)
.component('font-awesome-icon' , FontAwesomeIcon)
.mount('#app')
