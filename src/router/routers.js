import Main from '@/views/main/main.vue';

export default [{
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () =>
      import ('@/views/login/login.vue')
  },
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [{
      path: 'home',
      name: 'home',
      meta: {
        hideInMenu: true,
        notCache: true
      },
      component: () =>
        import ('@/views/home')
    }]
  },
  {
    path: '/ui',
    name: 'ui',
    meta: {
      icon: 'icon-book',
      title: 'UI 示例'
    },
    component: Main,
    children: [
      {
        path: 'ui-model',
        name: 'ui-model',
        meta: {
          title: 'iview ui'
        },
        component: () => import('@/views/ui/ui-model.vue')
      },
      {
        path: 'modals',
        name: 'modals',
        meta: {
          title: '对话框'
        },
        component: () => import('@/views/ui/modals.vue')
      },
    ]
  },
  {
    path: '/page',
    name: 'page',
    meta: {
      icon: 'icon-layout',
      title: '页面示例'
    },
    component: Main,
    children: [
      {
        path: '404',
        name: '404',
        meta: {
          title: '404'
        },
        component: () => import('@/views/page/error-page/404.vue')
      },
      {
        path: '401',
        name: '401',
        meta: {
          title: '401'
        },
        component: () => import('@/views/page/error-page/401.vue')
      },
      {
        path: '500',
        name: '500',
        meta: {
          title: '500'
        },
        component: () => import('@/views/page/error-page/500.vue')
      },
    ]
  },
  {
    path: '/table',
    name: 'table',
    meta: {
      icon: 'icon-table',
      title: '表格示例'
    },
    component: Main,
    children: [ ]
  },
  {
    path: '/form',
    name: 'form',
    meta: {
      icon: 'icon-form',
      title: '表单示例'
    },
    component: Main,
    children: [
    ]
  },
   {
    path: '/chart',
    name: 'chart',
    meta: {
      icon: 'icon-piechart',
      title: '统计图表'
    },
    component: Main,
    children: [
    ]
  },
  {
    path: '/system',
    name: 'system',
    meta: {
      icon: 'icon-setting',
      title: '系统管理'
    },
    component: Main,
    children: [
    ]
  },
  // {
  //   path: '/directive',
  //   name: 'directive',
  //     meta: {
    // 隐藏面包屑
  //       hide: true
  //     },
  //   component: Main,
  //   children: [{
  //     path: '/directive_page',
  //     name: 'directive_page',
  //     meta: {
  //       icon: 'icon-filetext1',
  //       title: '一级页面  '
  //     },
  //     component: () =>
  //       import ('@/views/directive/directive.vue')
  //   }]
  // },

  {
    path: '/401',
    name: 'error_401',
    component: () =>
      import ('@/views/page/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    component: () =>
      import ('@/views/page/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    component: () =>
      import ('@/views/page/error-page/404.vue')
  }
];
