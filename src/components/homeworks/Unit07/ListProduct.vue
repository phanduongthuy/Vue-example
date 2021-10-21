<template>
  <div class="product">
    <table>
      <tr class="label-head">
        <th>STT</th>
        <th>Sản phẩm</th>
        <th>Giá</th>
        <th>Số lượng</th>
        <th>Trạng thái</th>
        <th>Hành động</th>
      </tr>
      <tr v-for="(item,index) in items" :key="index">
        <td>{{ index + 1 }}</td>
        <td class="productName">
          <img :src="item.image" alt="" v-if="item.image !== ''">
          <img :src="defaultImage" alt="" v-else>
          <a href="#">{{item.name}}</a>
        </td>
        <td>{{ new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'VND',
          minimumFractionDigits: 0
        }).format(item.price) }}</td>
        <td>{{item.quantity}}</td>
        <td>
          <span v-if="item.isAvailable" style="color: #2bf10a">Còn hàng</span>
          <span v-else style="color: #f74c4c">Hết hàng</span>
        </td>
        <td>
          <button @click="addToCart(item)">Thêm vào giỏ hàng</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import {mapState, mapMutations} from "vuex";
export default {
  name: 'ListProduct',
  methods: {
    ...mapMutations([
        "addCart", "updateTotalMoney"
    ]),
    addToCart(data) {
      let flag = true
      let carts = this.carts;
      if (data.quantity > 0){
        if (carts.length > 0){
          for (let i = 0; i < carts.length; i++){
            if (data.id === carts[i].id){
              carts[i].qty = parseInt(carts[i].qty) + 1
              flag = true
              break
            }else {
              flag = false
            }
          }
          if (!flag){
            data.qty = 1;
            this.addCart(data)
          }
        }else {
          data.qty = 1;
          this.addCart(data)
        }
      }else{
        alert("Sản phẩm hết hàng")
      }
      this.updateTotalMoney()
    }
  },
  computed: {
    ...mapState([
        "items", "carts", "defaultImage"
    ])
  }
}
</script>
<style lang="scss" scoped>
@import "../../../assets/homeworks/Unit07/scss/Listproduct";
</style>