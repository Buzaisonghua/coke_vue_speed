<template>
  <div class="form-main">
    <div class="form-section">
      <div class="form-section-title">填写详情</div>
    </div>
    <div class="details">
      <div class="details_left">
        <TableNav
          :table-data="tableData"
          :list-type="listType"
          @changeNav="changeNav"
        />
      </div>
      <div class="details_right">
        <TableDetailsMain
          :table-data="tableData"
          :list-type="listType"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { taskFillInDetail } from '@/api/task'
export default {
  components: {
    TableNav: () => import('./TableNav'),
    TableDetailsMain: () => import('./TableDetailsMain')
  },
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      listType: 'all' // 下方表格的显示情况
    }
  },
  methods: {
    changeNav(e) {
      if (e.key === 'all') {
        this.listType = 'all'
      } else {
        const key = JSON.parse(e.key)
        this.listType = 'out'
        console.log(key)
        taskFillInDetail({ 'strMap.detailUuid': key.bstdUuid }).then(res => {
          console.log(res)
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.details{
    display: flex;
    height: 500px;
    padding-bottom: 20px;
    .details_left{
        width: 230px;
        height: 100%;
        border-right: 1px solid #f5f5f5;
        overflow-y: auto;
    }
    .details_right{
        flex: 1;
        overflow-y: auto;
        margin-left: 12px;
    }
}
</style>
