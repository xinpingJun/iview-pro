import Main from '@/views/main/main.vue';
import parentView from '@/components/parent-view'

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
    children: [{
        path: 'ui-model',
        name: 'ui-model',
        meta: {
          title: 'UI组件 - iview'
        },
        component: () =>
          import ('@/views/ui/ui-model.vue')
      },
      {
        path: 'icons',
        name: 'icons',
        meta: {
          title: '图标库 - Antesign'
        },
        component: () =>
          import ('@/views/ui/icons.vue')
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
    children: [{
        path: 'login-page',
        name: 'login-page',
        meta: {
          title: '登录页面'
        },
        component: () =>
          import ('@/views/login/login.vue')
      },
      {
        path: 'error',
        name: 'error',
        meta: {
          title: '服务器错误'
        },
        component: () =>
          import ('@/views/page/page-error/error.vue')
      },
      {
        path: '404',
        name: '404',
        meta: {
          title: '页面丢失'
        },
        component: () =>
          import ('@/views/page/page-error/404.vue')
      },
      {
        path: 'noauth',
        name: 'noauth',
        meta: {
          title: '没有权限'
        },
        component: () =>
          import ('@/views/page/page-noauth/noauth.vue')
      },
      {
        path: 'search_table',
        name: 'search_table',
        meta: {
          title: '查询表格'
        },
        component: () =>
          import ('@/views/page/page-table/search-table.vue')
      },
      {
        path: 'basic_form',
        name: 'basic_form',
        meta: {
          title: '表单详情页'
        },
        component: () =>
          import ('@/views/page/page-form/basic-form.vue')
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
    children: [{
        path: 'base_table',
        name: 'base_table',
        meta: {
          title: '基本表格',
          icon: 'icon-table',
        },
        component: () =>
          import ('@/views/table/table.vue')
      },
      {
        path: 'data_table',
        name: 'data_table',
        meta: {
          icon: 'icon-table',
          title: '数据表格'
        },
        component: () =>
          import ('@/views/table/data-table.vue')
      },
    ]
  },
  {
    path: '/form',
    name: 'form',
    meta: {
      icon: 'icon-form',
      title: '表单示例'
    },
    component: Main,
    children: [{
        path: 'base_form',
        name: 'base_form',

        meta: {
          icon: 'icon-table',
          title: '基础表单'
        },
        component: () =>
          import ('@/views/form/form.vue')
      },
      {
        path: 'other_form',
        name: 'other_form',
        meta: {
          icon: 'icon-table',
          title: '其他表单'
        },
        component: () =>
          import ('@/views/form/other-form.vue')
      },
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
    children: [{
        path: 'line',
        name: 'line',
        meta: {
          icon: 'icon-table',
          title: '折线图 - G2'
        },
        component: () =>
          import ('@/views/chart/line/line.vue')
      },
      {
        path: 'columnar',
        name: 'columnar',
        meta: {
          icon: 'icon-table',
          title: '柱状图 - G2'
        },
        component: () =>
          import ('@/views/chart/columnar/columnar.vue')
      },
      {
        path: 'pie',
        name: 'pie',
        meta: {
          icon: 'icon-table',
          title: '饼图 - G2'
        },
        component: () =>
          import ('@/views/chart/pie/pie.vue')
      },
      {
        path: 'scatter',
        name: 'scatter',
        meta: {
          icon: 'icon-table',
          title: '点图 - G2'
        },
        component: () =>
          import ('@/views/chart/scatter/scatter.vue')
      },
      {
        path: 'area',
        name: 'area',
        meta: {
          title: '区域图 - G2'
        },
        component: () =>
          import ('@/views/chart/area/area.vue')
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
    children: [{
        path: 'user',
        name: 'user',
        meta: {
          title: '用户管理'
        },
        component: () =>
          import ('@/views/system/page-user/user.vue')
      },
      {
        path: 'role',
        name: 'role',
        meta: {
          title: '角色管理'
        },
        component: () =>
          import ('@/views/system/page-role/role.vue')
      },
      {
        path: 'department',
        name: 'department',
        meta: {
          title: '部门管理'
        },
        component: () =>
          import ('@/views/system/page-department/department.vue')
      },
      {
        path: 'dictionary',
        name: 'dictionary',
        meta: {
          title: '字典管理'
        },
        component: () =>
          import ('@/views/system/page-dictionary/dictionary.vue')
      },
    ]
  },
  {
    path: '/directive',
    name: 'directive',
    meta: {
      // 隐藏面包屑
      // hide: true
    },
    component: Main,
    children: [{
      path: '/directive_page',
      name: 'directive_page',
      meta: {
        icon: 'icon-filetext1',
        title: '一级菜单'
      },
      component: () =>
        import ('@/views/chart/area/area.vue')
    }]
  },

  {
    path: '/multilevel',
    name: 'multilevel',
    meta: {
      icon: 'icon-table',
      title: '多级菜单'
    },
    component: Main,
    children: [{
        path: 'level_2_1',
        name: 'level_2_1',
        meta: {
          icon: 'md-funnel',
          title: '二级菜单1'
        },
        component: () =>
          import ('@/views/multilevel/level-2-1.vue')
      },
      {
        path: 'level_2_2',
        name: 'level_2_2',
        meta: {
          // access: ['super_admin'],
          icon: 'icon-table',
          showAlways: true,
          title: '二级菜单2'
        },
        component: parentView,
        children: [{
          path: 'level_2_2_1',
          name: 'level_2_2_1',
          meta: {
            icon: 'icon-table',
            title: '三级菜单1'
          },
          component: () =>
            import ('@/views/multilevel/level-2-2/level-3-1.vue')
        }]
      },
      {
        path: 'level_2_3',
        name: 'level_2_3',
        meta: {

          icon: 'icon-table',
          title: '二级菜单3'
        },
        component: () =>
          import ('@/views/multilevel/level-2-3.vue')
      },
    ]
  },
  {
    path: '/layout_simple',
    name: 'layout_simple',
    component: () =>
      import ('@/components/layout-view')
  },
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
  },
];
