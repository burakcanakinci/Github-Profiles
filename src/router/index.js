import { createRouter, createWebHistory } from 'vue-router'
import GithubProfiles from "../views/GithubProfiles.vue"

const routes =[
  {
    path: '/GithubProfiles',
    name: 'GithubProfiles',
    component: GithubProfiles
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
