<template>
  <div>
    <input type="text" v-model="customer_id">
    <input type="submit" value="提交" @click="submitForm"/>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      customer_id:''
    }
  },
  methods: {
    submitForm(ruleForm) {
      axios({
        type: "get",
        url: "api/cal",
        params: { customer_id: this.customer_id }
      }).then(res => {
        console.log(res.data);
      });
    }
  }
}
</script>
<style scoped>

</style>
