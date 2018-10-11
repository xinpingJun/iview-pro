<template>
<Submenu :name="`${parentName}`">
      <template slot="title">
          <i class="icon anticon menu-icon" :class="parentItem.meta.icon" ></i>
          {{parentItem.meta.title}}
      </template>

      <template v-for="item in children">
          <!--  没有子菜单 -->
          <template v-if="!item.children">
              <MenuItem  :name="item.name" :key="`menu-${item.name}`">
                <i class="icon anticon menu-icon" :class="item.meta.icon" ></i>
                {{item.meta.title}}
              </MenuItem>
          </template>
          <!-- 有子菜单 递归 -->
          <template v-else >
            <side-menu-item  :key="`menu-${item.name}`" :parent-item="item">
            </side-menu-item>
          </template>
      </template>

</Submenu>
</template>
<script>
export default {
  name: 'SideMenuItem',
  props: {
    parentItem: {
      type: Object,
      default: () => {}
    },
    theme: String,
    iconSize: Number
  },
  computed: {
    parentName() {
      return this.parentItem.name
    },
    children() {
      return this.parentItem.children
    },
  },

}
</script>
