<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>제품명</th>
        <th>가격</th>
        <th>카테고리</th>
        <th>배송료</th>
      </tr>
      </thead>
      <tbody>
      <tr :key="i" v-for="(item, i) in productList">
        <td>{{ item.product_name }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.delivery_price }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productList: []
    }
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      this.productList = await this.$api("https://fd3527c2-6132-4814-91a5-b94fa778cf8a.mock.pstmn.io/list", "get");
    }
  }
}
</script>

<style scoped>
table {
  font-family: Arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>