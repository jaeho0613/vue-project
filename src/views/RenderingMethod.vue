<template>
  <div>
    <h1 v-if="type=='A'">if A</h1>
    <h1 v-else-if="type=='B'">if B</h1>
    <h1 v-else>if C</h1>
    <h1 v-show="type=='A'">Show A</h1>
    <div style="background-color: #dddddd">
      <p>v-if와 v-show을 사용할 때는 </p>
      <p>해당 html 블록이 화면 내에서 자주 toggle이 일어나면 v-show을 사용하고,</p>
      <p>toggle이 일어나는 빈도가 작다면 v-if를 사용하는 것이 좋습니다.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 'A'
    }
  }
}
</script>

<style scoped>

</style>