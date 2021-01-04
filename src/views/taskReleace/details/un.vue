<template>
  <div class="form-container">
    <div class="form-header">
      <div class="form-header-left">
        <a-button type="primary" @click="getSumbit(issueBtn)">发布</a-button>
        <a-button type="primary" @click="getSumbit(sumbitBtn)">保存</a-button>
        <a-button type="primary">提交协办</a-button>
        <a-button type="primary">删除</a-button>
      </div>
      <div class="form-header-right">
        <a-button @click="get_close">关闭</a-button>
      </div>
    </div>
    <div class="form-main">
      <NewTaskForm ref="addTaskForm" :type="type" :details-form-info="detailsFormInfo" />
    </div>
  </div>
</template>
<script>
import { win_close } from '@/utils/common' // save_success
import { showDetialUn, findCmdsByNode } from '@/api/task'
import NewTaskForm from '@/views/taskReleace/new/components/addTaskForm'
export default {
  components: {
    NewTaskForm
  },
  data() {
    return {
      bstdTaskuuid: '',
      prop: '',
      detailsFormInfo: {},
      type: '0',
      issueBtn: {},
      sumbitBtn: {}
    }
  },
  mounted() {
    this.bstdTaskuuid = this.$route.query.bstdTaskuuid
    this.prop = this.$route.query.prop
    this.getDatas()
    findCmdsByNode().then(res => {
      if (res.success) {
        console.log(res.data)
        this.issueBtn = res.data[0]
        this.sumbitBtn = res.data[1]
      } else {
        this.$message.error('刷新重试')
      }
    })
  },
  methods: {
    getSumbit(item) {
      this.$confirm({
        title: `确定要${item.text}该任务吗？`,
        centered: true,
        onOk: () => {
          this.$refs.addTaskForm.getSumbit(item)
        }
      })
    },
    getDatas() {
      showDetialUn({
        bstpUuid: this.bstdTaskuuid,
        'strMap.resultid': this.prop
      }).then(res => {
        this.type = '1'
        this.detailsFormInfo = res.data.bsTaskPublish
      })
    },
    get_close() {
      win_close()
    }
  }
}
</script>
