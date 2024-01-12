import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowRight)
library.add(faMoon)
library.add(faSun)
createApp(App)
.component('font-awesome-icon' , FontAwesomeIcon)
.mount('#app')
