<template>
    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
        <Submenu name="1">
            <template slot="title">
            <Icon type="ios-navigate"></Icon><span class="menu-text">dashboard</span>
            </template>
            <MenuItem name="1-1"><span class="menu-text">分析页</span></MenuItem>
            <MenuItem name="1-2"><span class="menu-text">监控台</span></MenuItem>
            <MenuItem name="1-3"><span class="menu-text">工作台</span></MenuItem>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-keypad"></Icon><span class="menu-text">表单页</span>
            </template>
            <MenuItem name="2-1"><span class="menu-text">基础表单</span></MenuItem>
            <MenuItem name="2-2"><span class="menu-text">高级表单</span></MenuItem>
            <MenuItem name="2-3"><span class="menu-text">分步表单</span></MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-analytics"></Icon><span class="menu-text">列表页</span>
            </template>
            <MenuItem name="3-1"><span class="menu-text">表格查询</span></MenuItem>
            <MenuItem name="3-2"><span class="menu-text">卡片列表</span></MenuItem>
        </Submenu>
    </Menu>
</template>
<style lang="scss" scoped>
.menu-text{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
}
.sider-collapse{
   .menu-text{
        width: 0px;
        transition: width .2s ease;
   } 
    .ivu-icon{
            display: none;
        transition: all .2s ease;
    }
}
</style>

