import Vue from 'vue'
import VueRouter from 'vue-router'

import Example from './components/Example.vue';
import Example1 from './components/Example1.vue';
import LayoutComponent from './views/layout.vue';
import LoginComponent from './views/login.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/main', component: LayoutComponent,
            children: [
                {path: 'index', component: Example},
                {path: 'index1', component: Example1}
            ]
        },

        {path: '/login', component: LoginComponent}
    ]
});

export default router;