<script>
import Home from "./Home.vue";
import Blog from "./Blog.vue";
import BlogPage from "./BlogPage.vue";

import {createWebHistory} from "vue-router";

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'blog',
    path: '/blog/',
    component: Blog
  },
  {
    name: 'blog-page',
    path: '/blog/:page',
    component: BlogPage
  }
]
export default {
  router: VueRouter.createRouter({
    history: createWebHistory(),
    routes
  })
}
</script>