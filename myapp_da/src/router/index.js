import VueRouter from "vue-router";

import DaHome from '../pages/DaHome'
import DaSearch from '../pages/DaSearch'
import DaPerson from '../pages/DaPerson'
import DaContent from '../pages/DaContent'
import DaVideo from '../pages/homepages/DaVideo'
import DaMusic from '../pages/homepages/DaMusic'
import DaMore from '../pages/homepages/DaMore'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: 'DaHome/DaVideo',
        },
        {
            name: 'home',
            path: '/DaHome',
            component: DaHome,
            children: [
                {
                    name: 'video',
                    path: 'DaVideo',
                    component: DaVideo
                },
                {
                    name: 'music',
                    path: 'DaMusic',
                    component: DaMusic
                },
                {
                    name: 'more',
                    path: 'DaMore',
                    component: DaMore
                }
            ]
        },
        {
            name: 'search',
            path: '/DaSearch',
            component: DaSearch,
        },
        {
            name: 'person',
            path: '/DaPerson',
            component: DaPerson,
        },
        {
            name: 'content',
            path: '/DaContent',
            component: DaContent
        }
    ]
})

export default router