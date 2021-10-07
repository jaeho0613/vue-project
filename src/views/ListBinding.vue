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
      productList: [
        {
          "product_name": "기계식키보드",
          "price": 25000,
          "category": "노트북/태블릿",
          "delivery_price": 5000
        },
        {
          "product_name": "무선마우스",
          "price": 12000,
          "category": "노트북/태블릿",
          "delivery_price": 5000
        },
        {
          "product_name": "아이패드",
          "price": 725000,
          "category": "노트북/태블릿",
          "delivery_price": 5000
        },
        {
          "product_name": "태블릿거치대",
          "price": 32000,
          "category": "노트북/태블릿",
          "delivery_price": 5000
        },
        {
          "product_name": "무선충전기",
          "price": 42000,
          "category": "노트북/태블릿",
          "delivery_price": 5000
        },
      ]
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