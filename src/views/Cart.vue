<template>
  <div class="container">
    <ListProduct></ListProduct>
    <ListCart></ListCart>
  </div>
</template>

<script>
import ListProduct from "../components/homeworks/Unit07/ListProduct";
import ListCart from "../components/homeworks/Unit07/ListCart";
export default {
  name: 'Cart',
  components: {
    ListProduct,
    ListCart
  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

.container {
  display: flex;
}
</style>