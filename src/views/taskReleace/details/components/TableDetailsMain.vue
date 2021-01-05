<template>
  <div class="table-container">
    <!-- 表格操作 -->
    <div class="table-header">
      <div class="table-header-left" />
      <div class="table-header-right">
        <a-button type="primary">导出</a-button>
      </div>
    </div>
    <!-- 表格 -->
    <a-table
      v-if="listType === 'all'"
      :row-key="
        (record, index) => {
          return index
        }
      "
      :columns="columns"
      :data-source="tableData"
      :pagination="false"
      :scroll="{y: tableheight}"
    >
      <template slot="time" slot-scope="text">
        <span>{{ getTime(text) }}</span>
      </template>
    </a-table>
  </div>
</template>
<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    listType: {
      type: String,
      default: 'all'
    }
  },
  data() {
    return {
      tableheight: 388,
      columns: [
        {
          title: '序号',
          width: '80px',
          align: 'center',
          customRender: (text, record, index) => index + 1
        },
        {
          title: '单位',
          width: '140px',
          align: 'center',
          dataIndex: 'bstdFilinDeptname',
          ellipsis: true
        },
        {
          title: '描述',
          align: 'left',
          ellipsis: true,
          dataIndex: 'bsttDesc'
        },
        {
          title: '创建时间',
          width: '200px',
          align: 'center',
          ellipsis: true,
          scopedSlots: { customRender: 'time' },
          sorter: (a, b) => {
            return new Date(a.bstdCreateTime).getTime() - new Date(b.bstdCreateTime).getTime()
          },
          dataIndex: 'bstdCreateTime'
        }
      ]
    }
  },
  methods: {
    getTime(e) {
      return e.slice(0, 16)
    }
  }
}
</script>
<style lang="less" scoped>
.table-container .table-header{
    height: 46px!important;
    align-items: flex-start;
}
</style>
