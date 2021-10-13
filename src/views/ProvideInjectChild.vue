<template>
  <div>provideInject Child</div>
</template>

<script>
export default {
  inject: ['itemLength'],
  mounted() {
    console.log(this.itemLength);
  }
}
</script>

<style scoped>

</style>