<template>
    <Menu ref="menu" :active-name="activeName" :open-names="openedNames" theme="light" width="200" :accordion="accordion" @on-select="handleSelect">
      <template v-for="(item,index)  in menuList">

        <template v-if="item.children && item.children.length === 1">
            <MenuItem :name="item.children[0].name"  :key="index">
               <i class="icon anticon menu-icon" :class=item.children[0].meta.icon ></i>
               <span class="menu-text">{{item.children[0].meta.title}} </span>
            </MenuItem>
        </template>

        <template v-else>
            <Submenu :name="item.name"  :key="index">
                  <template slot="title">
                      <i class="icon anticon menu-icon " :class=item.icon ></i>
                      <span class="menu-text">{{item.meta.title}}</span>
                  </template>
                  <template v-if="item.children && item.children.length>0">
                      <MenuItem v-for="(child,childIndex) in item.children" :key="index+childIndex" :name="child.name">
                        <span class="menu-text">{{child.meta.title}}</span>
                      </MenuItem>
                  </template>
              </Submenu>
          </template>

        </template>
    </Menu>
</template>


<script>
import { getUnion } from "@/libs/tools";
export default {
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
