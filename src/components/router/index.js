import { createRouter, createWebHistory } from 'vue-router';
import Whatsapp from '../Dashboard/Whatsapp/Whatsapp.vue';
import Dashboard from '../Dashboard/Dashboard.vue';
import Campaigns from '../Dashboard/Campaigns/Campaings.vue';
import MessageTemplates from '../Dashboard/MessegeTemplates/MessageTemplates.vue';
import Automation from '../Dashboard/Automation/Automation.vue';
import Contacts from '../Dashboard/Contacts/Contacts.vue';
import AddContact from '../Dashboard/Contacts/AddContact.vue';
import BulkContact from '../Dashboard/Contacts/BulkContact.vue';

const routes = [
    {path: '/', name: 'Dashboard', component: Dashboard},
    // {path: '/chats', name: 'Chats', component: Chats},
    {path: '/chats/whatsapp', name: 'Whatsapp', component: Whatsapp},
    {path: '/campaigns', name: 'Campaigns', component: Campaigns},
    {path: '/messageTemplates', name: 'MessageTemplates', component: MessageTemplates},
    {path: '/automation', name: 'Automation', component: Automation},
    {path: '/contacts', name: 'Contacts', component: Contacts},
    {path: '/contacts/addContact', name: 'AddContact', component: AddContact},
    {path: '/contacts/BulkContact', name: 'BulkContact', component: BulkContact},

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;