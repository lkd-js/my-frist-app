import VueRouter from "vue-router";

import DaHome from '../pages/DaHome'
import DaSearch from '../pages/DaSearch'
import DaPerson from '../pages/DaPerson'
import DaContent from '../pages/DaContent'
import DaLogin from '../pages/userpages/DaLogin'
import DaUser from '../pages/userpages/DaUser'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: 'DaHome'
        },
        {
            path: '/DaHome',
            component: DaHome,
        },
        {
            path: '/DaSearch',
            component: DaSearch,
        },
        {
            path: '/DaPerson',
            component: DaPerson,
            children: [
                {
                    path: 'DaLogin',
                    component: DaLogin
                },
                {
                    path: 'DaUser',
                    component: DaUser
                }
            ]
        },
        {
            path: '/DaContent',
            component: DaContent
        }
    ]
})

export default router