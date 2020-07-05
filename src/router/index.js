import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue';
import FAQs from '../views/FAQs.vue';
import Contact from '../views/Contact.vue';



Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/faqs', name: 'FAQs', component: FAQs },
  { path: '/Contact', name: 'Contact', component: Contact }

]

const router = new VueRouter({
  routes
})

export default router
