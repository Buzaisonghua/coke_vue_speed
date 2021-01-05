<template>
  <div class="form-container">
    <div class="form-header">
      <div class="form-header-left">
        <a-button type="primary" @click="look_template">任务模板</a-button>
      </div>
      <div class="form-header-right">
        <a-button @click="get_close">关闭</a-button>
      </div>
    </div>
    <div class="details_list_box">
      <div class="details_list">
        <span>任务名称</span>
        <p>{{ resData.bstpTheme }}</p>
      </div>
      <div class="details_list">
        <span>填报单位</span>
        <p>{{ tableData.length }}个</p>
      </div>
      <div class="details_list">
        <span>逾期填报单位</span>
        <p>{{ noCompanyNum }}个</p>
      </div>
    </div>
    <FormDetails :res-data="resData" />
    <TableDetails :table-data="tableData" />
  </div>
</template>
<script>
import { detailTaskShareList } from '@/api/task'
import { win_close } from '@/utils/common' // save_success
export default {
  components: {
    FormDetails: () => import('./components/FormDetails'),
    TableDetails: () => import('./components/TableDetails')
  },
  data() {
    return {
      resData: {},
      tableData: [],
      noCompanyNum: 0,
      bstdTaskuuid: ''
    }
  },
  mounted() {
    this.bstdTaskuuid = this.$route.query.bstdTaskuuid
    detailTaskShareList({ bstsItemuuid: this.bstdTaskuuid }).then(res => {
      this.resData = res.data.task
      this.tableData = res.data.List
      console.log(this.tableData)
    })
  },
  methods: {
    get_close() {
      win_close()
    },
    look_template() {
      alert('点击查看任务模板')
    }
  }
}
</script>
<style lang="less" scoped>
.details_list_box{
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .details_list{
        flex: 1;
        display: flex;
        align-items: center;
        flex-flow: column;
        padding: 10px 0 0;
        border-right: 1px solid #f5f5f5;
        &:last-child{
            border: 0 none;
        }
        p{
            font-size: 24px;
            font-weight: bold;
            margin-top: 10px;
        }
    }
}
/deep/.ant-pagination{
    height: auto;
}
</style>
