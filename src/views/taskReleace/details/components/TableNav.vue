<template>
  <a-menu
    style="width: 229px;"
    :default-selected-keys="['all']"
    mode="inline"
    @click="handleClick"
  >
    <a-menu-item key="all">
      <span>全部</span>
    </a-menu-item>
    <a-menu-item v-for="item in tableData" :key="JSON.stringify(item)">
      <span>{{ item.bstdFilinDeptname }}</span>
    </a-menu-item>
  </a-menu>
</template>
<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    props: {
      listType: {
        type: String,
        default: 'all'
      }
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('changeNav', e)
      // if (e.key === 'all') {
      //   // 全部
      // } else {
      //   const key = JSON.parse(e.key)
      //   console.log(key)
      // }
    }
  }
}
</script>
