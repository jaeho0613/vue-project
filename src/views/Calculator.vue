<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="state.num1" @keyup="plusNumbers">
      <span> + </span>
      <input type="text" v-model="state.num2" @keyup="plusNumbers">
      <span> = </span>
      <span> {{ state.result }} </span>
    </div>
  </div>
</template>

<script>
import {reactive} from 'vue';

export default {
  name: 'calculator',
  setup() {
    console.log("setup start")
    let state = reactive({
      num1: 0,
      num2: 0,
      result: 0
    });

    function plusNumbers() {
      this.state.result = parseInt(state.num1) + parseInt(state.num2);
    }

    return {
      state,
      plusNumbers
    }
  }
}
</script>

<style scoped>

</style>