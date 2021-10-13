<script>
import ApiMixin from '@/api';

export default {
  mixins: [ApiMixin],
  data() {
    return {
      productList: []
    };
  },
  async mounted() {
    this.productList = await this.$callAPI("https://fd3527c2-6132-4814-91a5-b94fa778cf8a.mock.pstmn.io/list", "get");
    console.log("컴포넌트 mounted");
    console.log(this.productList);
  },
  unmounted() {
    console.log("컴포넌트 unmounted");
  }
}
</script>

<style scoped>

</style>