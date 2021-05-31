import Dashboard from "@/screens/dashboard/Dashboard";
import NotFound from "@/components/NotFound";
import VueRouter from "vue-router";
import Channel from "@/screens/channel/Channel";
import Auth from "@/screens/Auth";
import UserManagment from "@/screens/user-managment/UserManagment";
import OneChannel from "@/screens/one-channel/one-channel";
import EditOneChannel from "@/screens/edit-one-channel/EditOneChannel";
import AddChannel from "@/screens/add-channel/AddChannel";

const routes = [
    {
        path: '/',
        component: Dashboard
    },
    {
        path: '/user',
        component: UserManagment
    },
    {
        path: '/channel',
        component: Channel
    },
    {
        path: '/channel/:id',
        component: OneChannel
    },
    {
        path: '/channel/edit/:id',
        component: EditOneChannel
    },
    {
        path: '/channel_add',
        component: AddChannel
    },
    {
        path: '/login',
        component: Auth
    },
    {
        path: "*",
        component: NotFound
    },
]
const router = new VueRouter({
    mode: 'history',
    routes
})




/*router.beforeEach((to, from, next) => {
    const auth = !!localStorage.getItem("token")
    if (to.name !== 'login' && !auth) {
        console.log((to.name !== 'login' && !auth))
        next({ name: 'login' })
    }
    else next()
})*/

/*router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('jwt') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            let user = JSON.parse(localStorage.getItem('user'))
            if(to.matched.some(record => record.meta.is_admin)) {
                if(user.is_admin == 1){
                    next()
                }
                else{
                    next({ name: 'userboard'})
                }
            }else {
                next()
            }
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(localStorage.getItem('jwt') == null){
            next()
        }
        else{
            next({ name: 'userboard'})
        }
    }else {
        next()
    }
})*/


export default  router