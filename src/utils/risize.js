export default {
  data() {
    return {
      tableheight: 0
    }
  },
  mounted() {
    this.tableheight = document.body.clientHeight - 300
    window.onresize = () => {
      this.tableheight = document.body.clientHeight - 300
    }
  }
}
