<template>
  <div>
    <input type="text" v-model="customer_name">
    <input type="submit" value="提交" @click="submitForm"/>
     <p>用户名: {{ customer.customer_name }}</p>
     <p>地 址: {{ customer.customer_address }}</p>
     <p>余 额: {{ customer.customer_balance }}</p>
    <br/>
      <template v-for="order of customer.orderList">
          <p>订单号: {{order.order_id}}  日期: {{order.order_date}}</p>
          <template v-for="product of order.productList">
            <p>商品ID: {{product.product_id}}---商品名称: {{product.product_name}}---商品价格: {{product.product_price}}</p>
          </template>
          ------------------------------------------------------------------------------------------------------------
      </template>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      customer_name:'Titan',
      customer:{}
    }
  },
  methods: {
    submitForm(ruleForm) {
      axios({
        type: "get",
        url: "api/cal",
        params: { customer_name: this.customer_name }
      }).then(res => {
        this.customer = res.data;
        console.log(this.customer)
      });
    }
  }
}
</script>
<style scoped>

</style>
