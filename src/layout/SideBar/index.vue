<template>
  <div class="container">
    <a-menu
      :default-selected-keys="[defaultPath]"
      :selected-keys="[defaultPath]"
      :open-keys="defaultOpenKeys"
      mode="inline"
      :inline-collapsed="collapsed"
      theme="light"
      @openChange="togglesub"
      @click="chooseitem"
    >
      <template v-for="item in routes">
        <SidebarItem v-if="hasOneShowingChild(item.children)" :key="item.children[0].path" :route="item.children[0]" />
        <template v-else>
          <template v-if="item.hidden">
            <SidebarMenuItem :key="item.path" :route="item" />
          </template>
        </template>
      </template>
    </a-menu>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    SidebarItem: () => import('./components/SidebarItem'),
    SidebarMenuItem: () => import('./components/MenuItem')
  },
  data() {
    return {
      defaultPath: 'Home',
      defaultOpenKeys: [],
      rootSubmenuKeys: []
    }
  },
  computed: {
    ...mapGetters(['routes', 'collapsed'])
  },
  watch: {
    $route(val, old) {
      this.defaultPath = val.name
    }
  },
  mounted() {
    this.getRoot(this.routes)
    this.defaultPath = this.$route.name
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return true
        } else {
          return false
        }
      })
      if (showingChildren.length === 1 && children.length === 1) {
        return true
      }
      return false
    },
    togglesub(openKeys) {
      const latestOpenKey = openKeys.find(key => this.defaultOpenKeys.indexOf(key) === -1)
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.defaultOpenKeys = openKeys
      } else {
        this.defaultOpenKeys = latestOpenKey ? [latestOpenKey] : []
      }
    },
    chooseitem(e) {
      this.defaultPath = e.key
      this.$router.push({ name: e.key })
    },
    getRoot(route, name) {
      // 获取页面所有的路由key值
      route.forEach(val => {
        if (val.hidden && val.name && this.rootSubmenuKeys.indexOf(val.name) === -1) {
          this.rootSubmenuKeys.push(val.name)
        }
      })
    }
  }
}
</script>
<style lang="less">
@import '~@/styles/_constant.less';
@import './index.less';
</style>
