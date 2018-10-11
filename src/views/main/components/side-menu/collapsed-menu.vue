<template>
  <Dropdown ref="dropdown"
    @on-click="handleClick"
    :class="hideTitle ? '' : 'collased-menu-dropdown'"
    :transfer="hideTitle"
    :placement="placement">
    <a class="drop-menu-a"
      type="text"
      @mouseover="handleMousemove($event, children)"
      :style="{textAlign: !hideTitle ? 'left' : ''}">
      <i class="icon anticon menu-icon "
        :class="parentItem.meta.icon || (parentItem.children && parentItem.children[0].icon)" >
      </i>
      <span class="menu-title" v-if="!hideTitle">{{  ((parentItem.meta && parentItem.meta.title) || parentItem.name) }}</span>
      <Icon style="float: right;" v-if="!hideTitle" type="ios-arrow-forward" :size="16"/>
    </a>

    <DropdownMenu ref="dropdown" slot="list">
      <template v-for="child in children">
        <!-- 多级菜单 递归-->
        <template v-if="child.children" >
          <collapsed-menu
              :parent-item="child"
              :key="`drop-${child.name}`">
          </collapsed-menu>
        </template>
        <!-- 没有子菜单 -->
        <template v-else  >
          <DropdownItem
              :key="`drop-${child.name}`"
              :name="child.name">
              <i class="icon anticon menu-icon "
                :class="child.icon" >
              </i>
              <span class="menu-title"> {{((child.meta && child.meta.title) || child.name) }}</span>
          </DropdownItem>
        </template>

      </template>
    </DropdownMenu>
  </Dropdown>
</template>
<script>
import { findNodeUpperByClasses } from '@/libs/util'
export default {
  name: 'CollapsedMenu',
  computed: {
    parentName () {
      return this.parentItem.name
    },
    children () {
      return this.parentItem.children
    },
    textColor () {
      return this.theme === 'dark' ? '#fff' : '#495060'
    }
  },
  props: {
    parentItem: {
      type: Object,
      default: () => {}
    },
    hideTitle: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      placement: 'right-end'
    }
  },
  methods: {
    handleClick (name) {
      this.$router.push({
        name: name
      });
    },
    handleMousemove (event, children) {
      const { pageY } = event
      const height = children.length * 38
      const isOverflow = pageY + height < window.innerHeight
      this.placement = isOverflow ? 'right-start' : 'right-end'
    }
  },
  mounted () {
    let dropdown = findNodeUpperByClasses(this.$refs.dropdown.$el, ['ivu-select-dropdown', 'ivu-dropdown-transfer'])
    if (dropdown) dropdown.style.overflow = 'visible'
  }
}
</script>
