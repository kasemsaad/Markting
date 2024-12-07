import { createRouter, createWebHistory } from 'vue-router';
import Whatsapp from '../Whatsapp/Dashboard/Whatsapp.vue';
import Dashboard from '../Whatsapp/Dashboard/Dashboard.vue';

const routes = [
    {path: '/', name: 'Dashboard', component: Dashboard},
    // {path: '/chats', name: 'Chats', component: Chats},
    {path: '/chats', name: 'Chats', component: Whatsapp},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;