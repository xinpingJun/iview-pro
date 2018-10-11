<template>
<div :class="{collapse:isActive}">
  <div class="layout-logo">
    <img src="./logo.png" alt="">
    <!-- <h1 class="logo-text"  >COMVEE</h1> -->
    <h1 class="logo-text">IVIEW Pro</h1>
  </div>
  <div class="collapse-btn " :class="{active:isActive}" @click="collapse_fun()">
    <i class="icon anticon icon-menu-unfold"></i>
  </div>
  <div class="custom-wrapper">
    <custom-bread-crumb show-icon style="margin-left: 30px;" :list="breadCrumbList"></custom-bread-crumb>
  </div>
  <div class="header-right">
    <div class="right-item right-account">
      <Dropdown>
        <Avatar icon="ios-person" />
        <span class="account-name">xinpingJun</span>
        <DropdownMenu slot="list" class="user-list">
          <DropdownItem> <i class="icon anticon icon-user"></i> 个人中心</DropdownItem>
          <DropdownItem> <i class="icon anticon icon-setting"></i> 设置</DropdownItem>
          <DropdownItem divided @click.native="logout()"> <i class="icon anticon icon-logout"></i> 退出登录</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    <div class="right-item">
      <full-screen v-model="isFullscreen"></full-screen>
    </div>
    <div class="right-item">
        <Icon type="ios-notifications-outline" size="26"></Icon>
    </div>

  </div>
</div>
</template>

<script>
import customBreadCrumb from '../custom-bread-crumb'
import fullScreen from '../fullscreen'
export default {
  data() {
    return {
      isActive: false,
      isFullscreen: false
    }
  },
  components: {
    customBreadCrumb,
    fullScreen
  },
  computed: {
    breadCrumbList() {
      return this.$store.state.app.breadCrumbList
    }
  },
  methods: {
    collapse_fun() {
      this.isActive = !this.isActive;
      this.$emit('collapseFun', this.isActive)
    },
    logout() {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
@import './header-bar';
</style>
