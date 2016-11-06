import Vue from 'vue'
import VueRouter from 'vue-router'

import Example from './components/Example.vue';
import LoginComponent from './views/login.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        { path: '/index', component: Example},
        { path: '/login', component: LoginComponent}
    ]
});

export default router;