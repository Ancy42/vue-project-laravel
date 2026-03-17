import './bootstrap';

import { createApp } from 'vue';
import IndexPage from './components/IndexPage.vue'

// const app = createApp({})
// app.component('index-page', IndexPage)
// app.mount('#app')       
////////<!-- The 1 line of code below is better than the three lines of code above. -->
createApp(IndexPage).mount('#app')