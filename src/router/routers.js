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
          title: 'UI组件 - iview'
        },
        component: () => import('@/views/ui/ui-model.vue')
      },
      {
        path: 'modals',
        name: 'modals',
        meta: {
          title: '对话框 - modal'
        },
        component: () => import('@/views/ui/modals.vue')
      },
      {
        path: 'icons',
        name: 'icons',
        meta: {
          title: '图标库 - Antesign'
        },
        component: () => import('@/views/ui/icons.vue')
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
        path: 'login-page',
        name: 'login-page',
        meta: {
          title: '登录页面'
        },
        component: () => import('@/views/login/login.vue')
      },
      {
        path: 'error',
        name: 'error',
        meta: {
          title: '服务器错误'
        },
        component: () => import('@/views/page/page-error/error.vue')
      },
      {
        path: '404',
        name: '404',
        meta: {
          title: '页面丢失'
        },
        component: () => import('@/views/page/page-error/404.vue')
      },
      {
        path: 'noauth',
        name: 'noauth',
        meta: {
          title: '没有权限'
        },
        component: () => import('@/views/page/page-noauth/noauth.vue')
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
      {
        path: 'line',
        name: 'line',
        meta: {
          title: '折线图 - G2'
        },
        component: () => import('@/views/chart/line/line.vue')
      },
      {
        path: 'columnar',
        name: 'columnar',
        meta: {
          title: '柱状图 - G2'
        },
        component: () => import('@/views/chart/columnar/columnar.vue')
      },
      {
        path: 'pie',
        name: 'pie',
        meta: {
          title: '饼图 - G2'
        },
        component: () => import('@/views/chart/pie/pie.vue')
      },
      {
        path: 'scatter',
        name: 'scatter',
        meta: {
          title: '点图 - G2'
        },
        component: () => import('@/views/chart/scatter/scatter.vue')
      },
      {
        path: 'area',
        name: 'area',
        meta: {
          title: '区域图 - G2'
        },
        component: () => import('@/views/chart/area/area.vue')
      },
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
    path: '/noauth',
    name: 'noauth',
    component: () =>
      import ('@/views/page/page-noauth/noauth.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    component: () =>
      import ('@/views/page/page-error/error.vue')
  },
  {
    path: '*',
    name: 'error_404',
    component: () =>
      import ('@/views/page/page-error/404.vue')
  }
];
