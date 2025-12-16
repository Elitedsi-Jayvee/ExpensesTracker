import {createRouter, createWebHistory} from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'

const MainPage = () => import('@/views/MainPage.vue');
const SetupComponent = () => import('@/views/modules/Setup.vue');
const LogsComponent = import('@/views/modules/LogsMain.vue');
const SummaryComponent = import('@/views/modules/SummaryMain.vue');

const routes = [
    {
        path: '/',
        redirect: '/expenses/setup'
    },
    {
        path:'/expenses',
        component: MainPage,
        redirect: 'expenses/setup',
        children:[
            {
                path: 'home',
                name: 'Home',
                component: HomePage
            },
            {
                path: 'setup',
                name: 'SetupPage',
                component: SetupComponent
            },
            {
                path: 'logs',
                name: 'LogsPage',
                component: LogsComponent
            },
            {
                path: 'summary',
                name: 'SummaryPage',
                component: SummaryComponent
            },
        ]
    },

]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
