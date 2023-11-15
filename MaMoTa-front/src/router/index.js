import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CommunityView from '@/views/CommunityView.vue'
import PopularMovieView from '@/views/Movies/PopularMovieView.vue'
import TopRatedMovieView from '@/views/Movies/TopRatedMovieView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/community',
      name: 'community',
      component: CommunityView
    },
    {
      path: '/popular',
      name: 'PopularMovieView',
      component: PopularMovieView
    },
    {
      path: '/toprated',
      name: 'TopRatedMovieView',
      component: TopRatedMovieView
    }
  ]
})

export default router