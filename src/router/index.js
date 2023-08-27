import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Inputtag from '../views/Inputtag.vue';
import KanbanTable from '../views/KanbanTable.vue';
import SplitCount from '../views/SplitCount.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/inputtag',
      name: 'inputtag',
      component: Inputtag
    },
    {
      path: '/ktable',
      name: 'kanbanTable',
      component: KanbanTable
    },
    {
      path: '/splitcount',
      name: 'splitcount',
      component: SplitCount
    }
  ]
});

export default router;
