<template>
  <div class="formWrap">
    <div class="title">Sản phẩm</div>
    <div class="inputWrap">
      <div class="inputLabel">Tên sản phẩm <span>(*)</span></div>
      <input
          type="text"
          placeholder="Nhập tên sản phẩm"
          v-model="name"
          @keyup="updateName($event.target.value)"
      >
      <div class="errorMsg" v-if="nameErrorMsg">
        <span>Tên sản phẩm không được bỏ trống!</span>
      </div>
    </div>
    <div class="inputWrap">
      <div class="inputLabel">Đơn giá <span>(*)</span></div>
      <input
          type="number"
          placeholder="Nhập đơn giá sản phẩm"
          v-model="price"
          @keyup="updatePrice($event.target.value)"
      >
      <div class="errorMsg" v-if="priceErrorMsg">
        <span>Giá sản phẩm không được bỏ trống!</span>
      </div>
    </div>
    <div class="inputWrap">
      <div class="inputLabel">Số lượng <span>(*)</span></div>
      <input
          type="number"
          placeholder="Nhập số lượng sản phẩm"
          v-model="quantity"
          @keyup="updateQuantity($event.target.value)"
      >
      <div class="errorMsg" v-if="quantityErrorMsg">
        <span>Số lượng sản phẩm không được bỏ trống!</span>
      </div>
    </div>
    <div class="formActions">
      <button class="saveButton" @click="saveProduct()">
        {{button}}
      </button>
      <button class="defaultButton" @click="clearData()">Hủy</button>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from "vuex";
export default {
  name: 'ProductForm',
  data () {
    return {

    }
  },
  computed: {
    ...mapState([
      'name',
      'price',
      'quantity',
      'nameErrorMsg',
      'priceErrorMsg',
      'quantityErrorMsg',
      'data',
      'button',
      'products',
      'code'
    ]),
  },
  methods: {
    ...mapMutations([
      'updateName',
      'updatePrice',
      'updateQuantity',
      'updateNameErrorMsg',
      'updatePriceErrorMsg',
      'updateQuantityErrorMsg',
      'updateButton',
      'updateData',
      'updateProducts',
      'updateCode'
    ]),
    saveProduct () {
      let flag = false;
      if (this.name === '' || this.name === undefined) {
        this.updateNameErrorMsg(true)
        flag = true
      }
      if (this.price === '' || this.price === undefined) {
        this.updatePriceErrorMsg(true)
        flag = true
      }
      if (this.quantity === '' || this.quantity === undefined) {
        this.updateQuantityErrorMsg(true)
        flag = true
      }

      if (!flag) {
        let id = 'SP' + new Date().getTime();
        if (this.code !== '') {
          this.products.forEach((data) => {
            if (data.id === this.code) {
              data.name = this.name
              data.price = this.price
              data.quantity = this.quantity
            }
          })
          this.updateCode('')
        } else {
          let data = {
            id: id,
            name: this.name,
            price: this.price,
            quantity: this.quantity,
          }
          this.updateProducts(data)
        }
        this.updateButton('Tạo mới')
      }
      this.clearData();

    },
    clearData () {
      this.updateCode("")
      this.updateName("")
      this.updatePrice("")
      this.updateQuantity("")
      this.updateButton("Tạo mới")
    },
  },
  watch: {
    name(value) {
      (value !== '') ? this.updateNameErrorMsg(false) : ''
    },
    price(value) {
      (value !== '') ? this.updatePriceErrorMsg(false) : ''
    },
    quantity(value) {
      (value !== '') ? this.updateQuantityErrorMsg(false) : ''
    },
    product(value) {
      this.name = value.name
      this.price = value.price
      this.quantity = value.quantity
      this.button = 'Cập nhật'
    }
  },
}
</script>

<style lang="scss" scoped>
.formWrap {
  border: 1px solid #d8e0ea;
  width: 500px;
  min-height: 400px;
  margin-right: 20px;
  padding: 24px;
  position: relative;

  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #0080dd;
  }

  .inputWrap {
    margin-bottom: 12px;

    .inputLabel {
      font-weight: bold;
      margin-bottom: 8px;

      span {
        color: #f54b5e;
      }
    }

    input {
      width: 100%;
      height: 40px;
      border: 1px solid #d8e0ea;
      border-radius: 5px;
      outline: unset;
      font-size: 14px;

      &:hover,
      &:active,
      &:focus {
        border: 1px solid #0080dd;
      }
    }
  }

  .formActions {
    padding: 24px 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .saveButton {
      background: #0080dd;
      border: unset;
      font-size: 14px;
      font-weight: bold;
      color: #fff;
      width: 80px;
      height: 40px;
      border-radius: 5px;
      cursor: pointer;
    }

    .defaultButton {
      background: #d8e0ea;
      border: unset;
      font-size: 14px;
      font-weight: bold;
      color: #253036;
      width: 80px;
      height: 40px;
      border-radius: 5px;
      cursor: pointer;
      margin-left: 8px;
    }
  }

  .errorMsg {
    color: #f54b5e;
    margin-top: 4px;
    font-size: 12px;
  }

  .hasError {
    border: 1px solid #f54b5e !important;
  }
}
</style>