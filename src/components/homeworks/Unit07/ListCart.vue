<template>
  <div class="cart">
    <h2>Giỏ hàng</h2>
    <div class="list-cart">
      <table>
        <tr v-for="(product,index) in carts" :key="index">
          <td >
            <img :src="defaultImage" alt="" v-if="product.image === ''">
            <img :src="product.image" alt="" v-else>
          </td>
          <td>
            <p><b>{{product.name}}</b></p>
            <p>{{ new Intl.NumberFormat('de-DE', {
              style: 'currency',
              currency: 'VND',
              minimumFractionDigits: 0
            }).format(product.price)}}</p>
          </td>
          <td>
            <input type="number" @change="updateCart(index)" v-model="product.qty">
          </td>
          <td>
            <button @click="deleteProduct(index)">Xóa</button>
          </td>
        </tr>
      </table>
    </div>
    <div class="total">
      <b>Tổng tiền :
        {{ new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'VND',
          minimumFractionDigits: 0
        }).format(total) }}</b>
    </div>
  </div>

</template>
<script>
import {mapState, mapMutations} from "vuex";
export default {
  name: 'ListCart',
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations([
      'changeCart',
      'updateTotalMoney',
      'deleteProductInCart'
    ]),
    updateCart(id){
      let data = this.carts;
      if(data[id].qty <= 0){
        this.changeCart(id)
      }
      this.updateTotalMoney()
    },
    deleteProduct(data){
      this.deleteProductInCart(data);
      this.updateTotalMoney()
    }
  },
  computed: {
    ...mapState([
      "carts", "total", "defaultImage"
    ]),


  },

}
</script>
<style lang="scss" scoped>
@import "../../../assets/homeworks/Unit07/scss/ListCart";
</style>