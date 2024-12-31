import Vue from 'vue';
import Router from 'vue-router';
import AdminDashboard from '@/views/AdminDashboard.vue';
import CompanyDashboard from '@/views/CompanyDashboard.vue';
import StudentDashboard from '@/views/StudentDashboard.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/admin',
      name: 'admin',
      component: AdminDashboard
    },
    {
      path: '/company',
      name: 'company',
      component: CompanyDashboard
    },
    {
      path: '/student',
      name: 'student',
      component: StudentDashboard
    }
  ]
});
