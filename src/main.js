import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
import ProjectComponent from './components/ProjectComponent.vue'
import ArticleComponent from './components/ArticleComponent.vue'
import ContactComponent from './components/ContactComponent.vue'

import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeComponent },
        { path: '/projects', component: ProjectComponent },
        { path: '/articles', component: ArticleComponent },
        { path: '/contact', component: ContactComponent }
    ],
});

const app = createApp(App)

app.use(router)

app.mount('#app')