import './bootstrap';

import { createApp } from 'vue';
/////////////////  without use Router  ///////////////////

// import IndexPage from './components/IndexPage.vue'
// // const app = createApp({})
// // app.component('index-page', IndexPage)
// // app.mount('#app')

// ////////<!-- The 1 line of code below is better than the three lines of code above. -->
// createApp(IndexPage).mount('#app')


/////////////////  use with Router  /////////////////// 
import App from './components/layouts/App.vue'
import router from './router'
import { createPinia } from 'pinia' //store
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

createApp(App).use(createPinia()).use(router).mount('#app')
