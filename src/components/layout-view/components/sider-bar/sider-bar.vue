
<template lang="html">
    <div class="aside_bar">
        <div class="aside_bar_logo">
            <a href="#" class="abl_text">LOGO</a>
        </div>
        <div class="aside_bar_menu">
            <ul class="menu">
              <li class="menu_item menu_item_select" >
                  <a href="#" >
                      <div class="menu_item_custom ">
                          <i class="menu_icon icon anticon icon-home"> </i>
                          <span class="menu_text"> 首页 </span>
                      </div>
                  </a>
              </li>
              <li class="menu_item" >
                  <a href="#" >
                      <div class="menu_item_custom">
                          <i class="menu_icon icon anticon icon-mail"> </i>
                          <span class="menu_text"> 任务 </span>
                      </div>
                  </a>
              </li>
              <li class="menu_item" >
                  <a href="#" >
                      <div class="menu_item_custom">
                          <i class="menu_icon icon anticon icon-picture"> </i>
                          <span class="menu_text"> 相册 </span>
                      </div>
                  </a>
              </li>
              <li class="menu_item" >
                  <a href="#" >
                      <div class="menu_item_custom">
                          <i class="menu_icon icon anticon icon-folderopen"> </i>
                          <span class="menu_text"> 文件 </span>
                      </div>
                  </a>
              </li>
            </ul>
        </div>
        <div class="aside_bar_user">
          <div class="user_avatar">
            <img src="https://img.alicdn.com/tfs/TB1EchcpeuSBuNjy1XcXXcYjFXa-200-200.png" alt="">
          </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import './sider-bar.scss';
</style>
