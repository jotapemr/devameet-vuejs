import { createRouter, createWebHistory } from 'vue-router'
import LoginViewVue from '@/views/LoginView.vue'
import RegisterViewVue from '@/views/RegisterView.vue'
import HomeViewVue from '@/views/HomeView.vue'
import ProfileViewVue from '@/views/ProfileView.vue'
import { useAccessTokenStore } from '@/stores/accessToken';
import MeetAddViewVue from '@/views/MeetAddView.vue'
import MeetEditVue from '@/views/MeetEditView.vue'
import RoomLinkViewVue from '@/views/RoomLinkView.vue'
import RoomViewVue from '@/views/RoomView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue,
      meta: {rotaPrivada: true}
    },
    {
      path: '/',
      name: 'login',
      component: LoginViewVue,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterViewVue,
    },
    {
      path: '/user',
      name: 'user',
      component: ProfileViewVue,
      meta: {rotaPrivada: true}
    },
    {
      path: '/add',
      name: 'add',
      component: MeetAddViewVue,
      meta: {rotaPrivada: true}
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: MeetEditVue,
      meta: {rotaPrivada: true}
    },
    {
      path: '/link',
      name: 'link',
      component: RoomLinkViewVue,
      meta: {rotaPrivada: true}
    },
    {
      path: '/room/:link',
      name: 'room',
      component: RoomViewVue,
      meta: {rotaPrivada: true}
    },
  ]
});

router.beforeEach((to, from) => {
  const store = useAccessTokenStore();

  if(to.name !== 'login' && to.meta.rotaPrivada &&  !store.isAuthenticated){
    return {name: 'login'}
  }else if(to.name === 'register' && store.isAuthenticated){
    return {name: 'home'}
  } 
})

export default router
