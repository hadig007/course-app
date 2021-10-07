import { createRouter, createWebHistory } from "vue-router";

import Login from './components/autentikasi/Login.vue'
import Dashboard from './components/home/Dashboard.vue'
import AdminContent from './components/home/admin/AdminContent.vue'
import HtmlContent from './components/home/content/html/HtmlContent.vue'
import ListHtml from './components/home/content/html/ListHtml.vue'
import NotFound from './components/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', redirect:'/dashboard'},
        {path:'/dashboard', component: Dashboard,children:[
            // route untuk admin
            {path:'admin', component: AdminContent},
            {path:'html/', component: HtmlContent,children:[
                {path:'html_list/:id', component: ListHtml}
            ]},
        ]},
        {path:'/login', component: Login}, 
        {path:'/:NotFound(.*)', component: NotFound}, 
    ]
})

export default router;