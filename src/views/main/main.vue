
<template>
  <div class="layout">
    <Layout class="layout-wrapper">
      <!-- 顶部栏 -->
      <Header class="header-wrapper">
        <HeaderBar @collapseFun="collapse_fun"></HeaderBar>
      </Header>
      <div class="layout-main">
        <div class="sider-bar " :class="{ 'sider-collapse':isCollapse}">
          <!-- 侧边栏 -->
          <SideMenu :active-name="$route.name" :menuList="menuList"></SideMenu>
        </div>
        <div class="layout-content" :class="{ 'content-collapse':isCollapse}">
          <!-- tag -->
          <div class="tag-nav-wrapper">
            <tags-nav :value="$route" @input="handleClick" :list="tagNavList" @on-close="handleCloseTag" />
          </div>
          <Content class="main-content">
            <!-- 主内容 -->
            <MainView>
               <router-view></router-view>
            </MainView>
            <BackTop></BackTop>
          </Content>
        </div>
      </div>
    </Layout>

  </div>
</template>

<script>
  import HeaderBar from './components/header-bar/header-bar'
  import SideMenu from './components//side-menu//side-menu'
  import TagsNav from './components/tags-nav'
  import MainView from './components//main-view/index'
  import {
    mapMutations,
    mapActions
  } from 'vuex'
  import {
    getNewTagList,
    getNextName
  } from '@/libs/util'

  export default {
    components: {
      HeaderBar,
      SideMenu,
      TagsNav,
      MainView
    },
    data() {
      return {
        isCollapse: false
      }
    },
    computed: {
      tagNavList() {
        return this.$store.state.app.tagNavList
      },
      tagRouter() {
        return this.$store.state.app.tagRouter
      },
      userAvator() {
        return this.$store.state.user.avatorImgPath
      },
      cacheList() {
        return this.tagNavList.length ? this.tagNavList.filter(item => !(item.meta && item.meta.notCache)).map(item => item.name) : []
      },
      menuList() {
        return this.$store.getters.menuList
      }
    },
    methods: {
      collapse_fun(val) {
        this.isCollapse = val;
      },
      ...mapMutations([
        'setBreadCrumb',
        'setTagNavList',
        'addTag'
      ]),
      ...mapActions([
        'handleLogin'
      ]),
      turnToPage(name) {
        this.$router.push({
          name: name
        })
      },
      handleCollapsedChange(state) {
        this.collapsed = state
      },
      handleCloseTag(res, type, name) {
        const nextName = getNextName(this.tagNavList, name)
        this.setTagNavList(res)
        if (type === 'all') this.turnToPage('home')
        else if (this.$route.name === name) this.$router.push({
          name: nextName
        })
      },
      handleClick(item) {
        this.turnToPage(item.name)
      }
    },
    watch: {
      '$route' (newRoute) {
        this.setBreadCrumb(newRoute.matched)
        this.setTagNavList(getNewTagList(this.tagNavList, newRoute))
      }
    },
    mounted() {
      /**
       * @description 初始化设置面包屑导航和标签导航
       */
      this.setTagNavList()
      this.addTag(this.$store.state.app.homeRoute)
      this.setBreadCrumb(this.$route.matched)
    }
  };
</script>

<style scoped lang="scss">
  @import "./main";
</style>
