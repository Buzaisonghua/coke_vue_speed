<template>
  <div class="form-container">
    <div class="form-header">
      <div class="form-header-left">
        <a-button v-for="item in btnData" :key="item.text" type="primary" @click="getSumbit(item)">{{ item.text }}</a-button>
        <a-button v-if="types" type="primary" @click="deleteTask">取消协办</a-button>
        <a-button v-if="!types" type="primary" @click="deleteTask">删除</a-button>
      </div>
      <div class="form-header-right">
        <a-button @click="get_close">关闭</a-button>
      </div>
    </div>
    <div class="form-main">
      <NewTaskForm
        ref="addTaskForm"
        :type="type"
        :types-parent="types"
        :details-form-info="detailsFormInfo"
        @setHtml="setHtml"
        @closeNew="closeNew"
      />
      <div class="form-section">
        <div class="form-section-title">模板详情</div>
      </div>
      <div v-html="html" />
    </div>

  </div>
</template>
<script>
import { win_close, save_success } from '@/utils/common' // save_success
import { showDetialUn, findCmdsByNode, updateBsTaskPublish } from '@/api/task'
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
      btnData: [],
      html: '',
      types: false // 为true时代表当前处于协办环节
    }
  },
  mounted() {
    this.bstdTaskuuid = this.$route.query.bstdTaskuuid
    this.prop = this.$route.query.prop
    this.getDatas()
  },
  methods: {
    getBtnList() {
      findCmdsByNode().then(res => {
        if (res.success) {
          this.btnData = res.data
        } else {
          this.$message.error('刷新重试')
        }
      })
    },
    setHtml(html) {
      this.html = html
    },
    getSumbit(item) {
      this.$confirm({
        title: `确定要${item.text}该任务吗？`,
        centered: true,
        onOk: () => {
          this.$refs.addTaskForm.getSumbit(item, 'revise')
        }
      })
    },
    deleteTask() {
      updateBsTaskPublish({
        uuid: this.bstdTaskuuid,
        bstpStatus: '2'
      }).then(res => {
        if (res.success) {
          save_success(() => win_close())
        } else {
          this.$message.error('刷新重试')
        }
      })
    },
    getTypes(val) {
      if (val === '协办') {
        this.type = '1'
        return true
      } else {
        this.type = '2'
        this.getBtnList()
        return false
      }
    },
    getDatas() {
      showDetialUn({
        bstpUuid: this.bstdTaskuuid,
        'strMap.resultid': this.prop
      }).then(res => {
        this.types = this.getTypes(res.data.coreWkflwNode.wfndeName)
        this.detailsFormInfo = res.data.bsTaskPublish
        this.html = res.data.FormContent
      })
    },
    closeNew(text) {
      if (text.val === '发布') {
        save_success(() => { win_close() })
      } else {
        this.$confirm({
          title: '操作成功',
          centered: true,
          onOk: () => {
            this.$router.push({ path: '/form/taskDetailsUn', query: {
              bstdTaskuuid: text.data.bstpUuid,
              bstdFilinDeptname: text.data.bstpDeptname,
              prop: text.data.prop2
            }})
          }
        })
      }
      // save_success(() => win_close())
    },
    get_close() {
      this.$confirm({
        title: `确定要删除该任务吗？`,
        centered: true,
        onOk: () => {
          win_close()
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/styles/layui.css';
@import '~@/styles/common.css';
</style>
