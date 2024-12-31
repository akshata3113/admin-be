import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Home from "./components/Home.vue";  // Import the Home component
import AdminDashboard from './components/views/AdminDashboard.vue'
import CompanyDashboard from './components/views/CompanyDashboard.vue'
import PostJob from './components/Company/PostJob.vue'

Vue.use(VueRouter);

// Define the routes
const routes = [
  {
    path: "/",
    component: Home,  // Route to the Home component
  },
  {
    path: "/admin",
    component: AdminDashboard,  
  },
  {
    path: "/company",
    component: CompanyDashboard,  
  },
  {
    path: "/company/post-job",
    component: PostJob,
  },
  // You can define more routes here as needed
];

// Create a new VueRouter instance
const router = new VueRouter({
  routes,
});

// Create a Vue instance and mount it
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
