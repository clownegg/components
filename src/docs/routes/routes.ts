import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/components',
    component: () => import('@/docs/pages/home/home.vue'),
  },
  {
    path: '/components/button',
    component: () => import('@/docs/pages/button/button-page.vue'),
  },
  {
    path: '/:anymatch(.*)',
    component: () => import('@/docs/pages/not-found/not-found.vue'),
  },
];
