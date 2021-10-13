<template>
  <div>
    <ProvideInjectChild/>
    <CompositionAPIProvide/>
  </div>
</template>

<script>
import ProvideInjectChild from "@/views/ProvideInjectChild";
import CompositionAPIProvide from "@/views/CompositionAPIProvide";

export default {
  name: "ProvideInject",
  components: {CompositionAPIProvide, ProvideInjectChild},
  data() {
    return {
      items: ['A', 'B']
    };
  },
  provide() {
    return {
      itemLength: this.items.length
    }
  }


}
</script>

<style scoped>

</style>