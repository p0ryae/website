import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
import ProjectComponent from './components/ProjectComponent.vue'
import BlogComponent from './components/BlogComponent.vue'
import ExperienceComponent from './components/ExperienceComponent.vue'

import App from './App.vue'

import 'animate.css';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeComponent },
        { path: '/projects', component: ProjectComponent },
        { path: '/blog', component: BlogComponent },
        { path: '/experience', component: ExperienceComponent }
    ],
});

const app = createApp(App)

app.use(router)

app.mount('#app')