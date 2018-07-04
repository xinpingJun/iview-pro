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
        path: 'grids',
        name: 'grids',
        meta: {
          title: '栅格布局'
        },
        component: () => import('@/views/ui/layout/grids.vue')
      },
      {
        path: 'flex',
        name: 'flex',
        meta: {
          title: '弹性布局'
        },
        component: () => import('@/views/ui/layout/flex.vue')
      },
      {
        path: 'panel',
        name: 'panel',
        meta: {
          title: '面板'
        },
        component: () => import('@/views/ui/basic/panel.vue')
      },
      {
        path: 'buttons',
        name: 'buttons',
        meta: {
          title: '按钮'
        },
        component: () => import('@/views/ui/basic/buttons.vue')
      },
      {
        path: 'modals',
        name: 'modals',
        meta: {
          title: '模态框'
        },
        component: () => import('@/views/ui/basic/modals.vue')
      },
      {
        path: 'utilities',
        name: 'utilities',
        meta: {
          title: '辅助类'
        },
        component: () => import('@/views/ui/basic/utilities.vue')
      },
      {
        path: 'dropdowns',
        name: 'dropdowns',
        meta: {
          title: '下拉菜单'
        },
        component: () => import('@/views/ui/basic/dropdowns.vue')
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