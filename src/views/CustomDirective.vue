<template>
  <div style="height: 1000px;">
    <p v-pin="position">페이지 고정 영역(position: fixed; top:50px,left:100px;)</p>
    <input type="text" v-focus placeholder="전역 포커스"/>
    <input type="text" placeholder="컴포넌트 포커스"/>
  </div>
</template>

<script>
export default {
  name: "CustomDirective",
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      }
    },
    pin: {
      mounted(el, binding) {
        el.style.position = 'fixed';
        el.style.top = binding.value.top + 'px';
        el.style.left = binding.value.left + 'px';
      }
    }
  },
  data() {
    return {
      position: {top: 50, left: 100}
    }
  }
}
</script>

<style scoped>

</style>