import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/pages/Home.vue'
import About from '../components/pages/About.vue'
import Contact from '../components/pages/Contact.vue'

import ProductList from '../components/pages/ProductList.vue'
import ProductForm from '../components/pages/ProductForm.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },

    { path: '/list', component: ProductList },
    { path: '/add', component: ProductForm }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router