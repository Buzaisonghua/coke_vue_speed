<template>
  <div class="form-main">
    <div class="form-section">
      <div class="form-section-title">已完成任务详情</div>
      <div class="form-section-content">
        <a-form-model
          ref="ruleForm"
          :colon="false"
          :model="resData"
          :label-col="{flex: '100px'}"
          :wrapper-col="{flex: 'auto'}"
        >
          <a-row>
            <a-col :span="11">
              <a-form-model-item label="创建日期">
                <a-input v-model="resData.bstpCreateTime" disabled />
              </a-form-model-item>
            </a-col>
            <a-col :span="2" />
            <a-col :span="11">
              <a-form-model-item label="截止日期">
                <a-input v-model="resData.bstpDeadline" disabled />
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="11">
              <a-form-model-item label="发布单位">
                <a-input v-model="resData.bstpDeptname" disabled />
              </a-form-model-item>
            </a-col>
            <a-col :span="2" />
            <a-col :span="11">
              <a-form-model-item label="任务类型">
                <a-input v-model="resData.bstpType" disabled />
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-form-model-item label="填报单位">
                <a-input v-model="resData.bstpFillinDeptname" disabled />
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-form-model-item label="共享对象">
                <a-input v-model="resData.bstpShareUsername" disabled />
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-form-model-item label="任务描述">
                <a-textarea
                  v-model="resData.bstpDesc"
                  :max-length="2000"
                  auto-size
                  disabled
                  placeholder="请输入模板描述"
                />
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-form-model-item label="任务模板">
                <a-input v-model="resData.bstpDesc" disabled />
              </a-form-model-item>
            </a-col>
          </a-row>
        </a-form-model>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    resData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      formInfo: {
        bsttName: '1'
      }
    }
  }
}
</script>
