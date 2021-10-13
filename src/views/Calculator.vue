<template>
  <div>
    <div>
      <h2>Default Calculator</h2>
      <div>
        <input type="text" v-model="num1" @keyup="plusNumbers">
        <span> + </span>
        <input type="text" v-model="num2" @keyup="plusNumbers">
        <span> = </span>
        <span> {{ result }} </span>
      </div>
    </div>
    <div>
      <Composition/>
    </div>
    <div>
      <CompositionAPI2/>
    </div>
    <div>
      <CompositionAPI4/>
    </div>
  </div>
</template>

<script>
import Composition from "@/views/CompositionAPI";
import CompositionAPI2 from "@/views/CompositionAPI2";
import CompositionAPI4 from "@/views/CompositionAPI4";
export default {
  name: 'calculator',
  components: {CompositionAPI4, CompositionAPI2, Composition},
  data() {
    return {
      num1: 0,
      num2: 0,
      result: 0
    }
  },
  methods: {
    plusNumbers() {
      this.result = parseInt(this.num1) + parseInt(this.num2);
    }
  }
}
</script>

<style scoped>

</style>