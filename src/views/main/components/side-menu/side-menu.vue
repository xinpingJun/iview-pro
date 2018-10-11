<template>
  <div class="side-menu-wrapper">
    <Menu ref="menu"
          :active-name="activeName"
          :open-names="openedNames"
          theme="light"
          width="200"
          v-show="!collapse"
          :accordion="accordion"
          @on-select="handleSelect">

      <!-- 展开 -->
      <template  v-for="(item,index)  in menuList">
          <!-- 一级路由 -->
          <template v-if="item.children && item.children.length === 1">
              <MenuItem :name="item.children[0].name"  :key="index">
                 <i class="icon anticon menu-icon" :class="item.children[0].meta.icon" ></i>
                 <span class="menu-text">{{item.children[0].meta.title}} </span>
              </MenuItem>
          </template>
          <!-- 多级路由  -->
          <template v-else>
              <side-menu-item
                :key="`menu-${item.name}`"
                :parent-item="item">
              </side-menu-item>
          </template>
      </template>
    </Menu>
    <!-- 收起 -->
    <div class="menu-collapsed" v-show="collapse" >
      <div class="menu-collapsed-content">
        <template  v-for="(item,index)  in menuList">
          <!-- 多级菜单 -->
          <collapsed-menu
            v-if="item.children && item.children.length > 1"
            @on-click="handleSelect"
            hide-title
            :parent-item="item"
            :key="`drop-menu-${item.name}`">
          </collapsed-menu>
          <!-- 单个 -->
          <Tooltip
            transfer
            v-else
            hide-title
            :content="(item.meta && item.meta.title) || (item.children && item.children[0] && item.children[0].meta.title)"
            placement="right" :key="`drop-menu-${item.name}`">
              <a class="drop-menu-a" @click='handleSelect(item.children[0].name)'>
                <i class="icon anticon menu-icon "
                  :class="item.icon || (item.children && item.children[0].icon)" >
                </i>
              </a>
          </Tooltip>
        </template>
      </div>

    </div>
  </div>
</template>


<script>
import { getUnion } from "@/libs/tools";
import SideMenuItem from './side-menu-item.vue'
import CollapsedMenu from './collapsed-menu.vue'
export default {
  components:{
    SideMenuItem,
    CollapsedMenu
  },
  props: {
    menuList: {
      type: Array,
      default: []
    },
    accordion: {
      type:Boolean,
      default:true,
    },
    activeName: {
      type: String,
      default: ""
    },
    openNames: {
      type: Array,
      default: () => []
    },
    collapse:{
      type:Boolean,
      default:false,
    }
  },
  data(){
      return {
         openedNames:[]
      }
  },
  methods: {
    handleSelect(name) {
      this.$router.push({
        name: name
      });
    },
    getOpenedNamesByActiveName(name) {
      return this.$route.matched
        .map(item => item.name)
        .filter(item => item !== name);
    }
  },
  watch: {
    activeName(name) {
      if (this.accordion)
        this.openedNames = this.getOpenedNamesByActiveName(name);
      else
        this.openedNames = getUnion(
          this.openedNames,
          this.getOpenedNamesByActiveName(name)
        );
    },
    openNames(newNames) {
      this.openedNames = newNames;
    },
    openedNames() {
      this.$nextTick(() => {
        this.$refs.menu.updateOpened();
      });
    }
  },
  mounted() {
    this.openedNames = getUnion(
      this.openedNames,
      this.getOpenedNamesByActiveName(name)
    );
  }
};
</script>

<style lang="scss">
  @import './side-menu.scss';
</style>
