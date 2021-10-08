<template>
  <div>
    <child-component @send-message="sendMessage" ref="child_component"/>
    <button type="button" @click="changeChildData">Change Child Data</button>
    <br>
    <button type="button" @click="checkChild">자식 컴포넌트 데이터 조회</button>
  </div>
</template>

<script>
import ChildComponent from "@/views/ChildComponent";

export default {
  components: {ChildComponent},
  mounted() {
    this.$refs.child_component.$refs.btn.click();
  },
  methods: {
    changeChildData() {
      this.$refs.child_component.msg = '부모 컴포넌트가 변경한 데이터';
    },
    sendMessage(data) {
      console.log(data);
    },
    checkChild() {
      alert(this.msg);
    }
  },
  computed: {
    msg() {
      return this.$refs.child_component.msg;
    }
  },
}
</script>

<style scoped>

</style>