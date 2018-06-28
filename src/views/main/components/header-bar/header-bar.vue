<template>
        <div>
            <div class="layout-logo">
                <img src="./logo.png" alt="">
                <h1 class="logo-text">Iview Pro</h1>
            </div>
            <div class="collapse-btn " :class="{active:isActive}" @click="collapse_fun()">
                <i class="icon anticon icon-menu-unfold"></i>
            </div>
            <div class="header-right">
                <div class="right-item right-infomation">
                    <Badge dot>
                        <i class="icon anticon icon-bells"></i>
                    </Badge>
                </div>
     
                <div class="right-item right-account">
                    <Dropdown>
                        <Avatar icon="person" size="small" />
                        <span class="account-name">iview Admin</span>
                        <DropdownMenu slot="list" class="user-list">
                            <DropdownItem>  <i class="icon anticon icon-user"></i> 个人中心</DropdownItem>
                            <DropdownItem>  <i class="icon anticon icon-setting"></i>  设置</DropdownItem>
                            <DropdownItem divided @click.native="logout()">  <i class="icon anticon icon-logout"></i> 退出登录</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </div>

</template>
<script>
export default {
    data(){
        return{
            isActive:false
        }
    },
    methods:{
        collapse_fun(){
            this.isActive = !this.isActive;
            this.$emit('collapseFun',this.isActive)
        },
        logout(){
            this.$router.push('/login')
        }
    }
}
</script>

 <style lang="scss" scoped>
 @import './header-bar';
 </style>
 