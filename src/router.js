import {createRouter, createWebHistory} from 'vue-router'

import MainPage from '../src/pages/MainPage.vue'
import FilmsLayout from '../src/pages/FilmsLayout.vue'
import FilmPage from '../src/pages/FilmPage.vue'
import AllFilmsPage from '../src/pages/AllFilmsPage.vue'
import NotFound from '../src/pages/404.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
          path: '/',
          name: 'main',
          component: MainPage
        },
        {
          path: '/films',
          name: 'filmsLayout',
          component: FilmsLayout,
          children: [
            {
              path: '',
              name: 'films',
              component: AllFilmsPage
            },
            {
              path: ':id',
              name: 'filmPage',
              component: FilmPage,
              beforeEnter: (to, from, next) => {
                if(localStorage.getItem('auth')) {
                  next()
                } else {
                  next({ name: 'films' })
                }
              }
            },
            {
              path: '*/*',
              redirect: { name: 'films' }
            },
          ]
        },
        {
          path: '/:catchAll(.*)',
          name: 'notFound',
          component: NotFound
        },
      ]
})



export default router;

