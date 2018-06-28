
<template>
    <div class="layout">
        <Layout class="layout-wrapper">
            <!-- 顶部栏 -->
            <Header class="header-wrapper">
                <HeaderBar @collapseFun="collapse_fun"></HeaderBar>
            </Header>
            <Layout>
                <!-- <Sider  class="sider-wrapper" :style="{left:'-200px' ,flex:'0 0 0',maxWidth:'0',minWidth:'0'}"> -->
                <Sider  class="sider-wrapper " :class="{ 'sider-collapse':isCollapse}">
                    <!-- 侧边栏 -->
                    <SideMenu></SideMenu>
                </Sider>
                <Layout  class="layout-content"  >
                    <!-- 面包屑 -->
                    <BreadcrumbBar></BreadcrumbBar>
                    <Content class="main-content" >
                        <!-- 主内容 -->
                        
                        <router-view></router-view>
                    </Content>
                </Layout>

            </Layout>
        </Layout>
    </div>
</template>
<script>
import HeaderBar from './components/header-bar/header-bar'
import SideMenu from './components//side-menu//side-menu'
import BreadcrumbBar from './components/bread-crumb-bar/bread-crumb-bar'

export default {
    components:{
        HeaderBar,
        SideMenu,
        BreadcrumbBar
    },
    data(){
        return {
            isCollapse:false
        }
    },
    methods:{
        collapse_fun(val){
            this.isCollapse =val;
        }
    }
};
</script>
 
<style scoped lang="scss">
@import "./main";
</style>