<template>
  <div class="form-container">
    <div class="form-header">
      <div class="form-header-left" />
      <div class="form-header-right">
        <a-button @click="get_close">关闭</a-button>
      </div>
    </div>
    <FormDetails :res-data="resData" />
  </div>
</template>
<script>
import { showDetialLast } from '@/api/task'
import { win_close } from '@/utils/common' // save_success
export default {
  components: {
    FormDetails: () => import('./FormDetails')
  },
  data() {
    return {
      resData: {},
      uuid: ''
    }
  },
  mounted() {
    this.uuid = this.$route.query.uuid
    this.getData()
  },
  methods: {
    getData() {
      showDetialLast({ uuid: this.uuid }).then(res => {
        console.log(res)
      })
    },
    get_close() {
      win_close()
    }
  }
}
</script>
