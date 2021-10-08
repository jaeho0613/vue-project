<template>
  <div>
    <h1>{{ msg }}</h1>
    <button type="button" @click="childFunc" ref="btn">Click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '',
      msg2: '자식 컴포넌트로부터 보내는 메세지'
    }
  },
  mounted() {
    this.$emit('send-message', this.msg2);
  },
  methods: {
    childFunc() {
      console.log("부모 컴포넌트에서 직접 발생시킨 이벤트");
    }
  }
}
</script>

<style scoped>

</style>