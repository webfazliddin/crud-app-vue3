import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import ProductCard from './components/global-components'

import App from './App.vue'
import router from './router'

import "@/assets/scss/global.scss";
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

const app = createApp(App)

app.use(createPinia()).use(router).use(ProductCard).use(Quasar, { plugins: {},})

app.mount('#app')
