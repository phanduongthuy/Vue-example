<template>
  <div class="productList">
    <table>
      <tr>
        <th>Mã sản phẩm</th>
        <th>Tên sản phẩm</th>
        <th>Giá sản phẩm</th>
        <th>Số lượng</th>
        <th>Trạng thái</th>
        <th>Hành động</th>
      </tr>
      <tr v-if="products.length === 0">
        <td colspan="6" class="textCenter">Không có dữ liệu</td>
      </tr>
      <tr v-for="(product, index) in draft" :key="index">
        <td>{{product.id}}</td>
        <td><span class="textMain">{{product.name}}</span></td>
        <td>{{formatPrice(product.price)}}</td>
        <td class="textCenter">{{product.quantity}}</td>
        <td class="textCenter">
          <span v-if="product.quantity > 0" class="textGreen">Còn hàng</span>
          <span v-else class="textRed">Hết hàng</span>
        </td>
        <td>
          <button class="editButton" @click="editProduct(product.id)">Sửa</button>
          <button class="deleteButton" @click="deleteProduct(product.id)">Xóa</button>
        </td>
      </tr>
    </table>
    <div class="paginationWrap">
      <div class="paginationDetail">
        Hiển thị {{ from }} - {{ to }} trên tổng {{ products.length }} ({{ currentPage }} trang)
      </div>
      <div>
        <el-pagination background layout="prev, next" :total="products.length"
                       :page-size="5" @prev-click="prev()" @next-click="next()">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from "vuex";
export default {
  name: 'ProductList',
  data () {
    return {

    }
  },
  computed: {
    ...mapState([
        'name',
        'price',
        'quantity',
        'products',
        'draft',
        'code',
        'from',
        'to',
        'currentPage'
    ]),
  },
  methods: {
    ...mapMutations([
      'updateName',
      'updatePrice',
      'updateQuantity',
      'updateProducts',
      'updateDraft',
      'updateCode',
      'updateButton',
      'updateFrom',
      'updateTo',
      'updateCurrentPage',
    ]),
    editProduct (code) {
      let index = -1
      this.products.forEach((data, indexProduct) => {
        if (data.id === code) {
          index = indexProduct
        }
      })
      this.updateCode(this.products[index].id)
      this.updateName(this.products[index].name)
      this.updatePrice(this.products[index].price)
      this.updateQuantity(this.products[index].quantity)
      this.updateButton('Cập nhật')
    },
    deleteProduct (value) {
      let index = -1
      this.products.forEach((data, indexProduct) => {
        if (data.code === value) {
          index = indexProduct
        }
      })
      this.products.splice(index, 1)

      if (this.products.length > 0) {
        if (this.products.length < 6) {
          this.updateFrom(1)
          this.updateTo(this.products.length)
          this.updateCurrentPage(1)
        } else {
          if (this.to > this.products.length) {
            this.updateTo(this.products.length)
            if (this.from > this.to) {
              this.updateFrom(this.from - 5)
              this.updateCurrentPage(this.currentPage - 1)
            }
            this.updateDraft(this.products.slice(this.from - 1, this.to))
          }
        }
      } else {
        this.updateFrom(0)
        this.updateTo(0)
        this.updateCurrentPage(1)
      }
    },
    next() {
      this.updateFrom(this.from + 5)
      if (this.to + 5 > this.products.length){
        this.updateTo(this.to + (this.products.length - this.to))
      } else {
        this.updateTo(this.to + 5)
      }
      this.updateCurrentPage(this.currentPage + 1)
      this.updateDraft(this.products.slice(this.from - 1, this.to))
    },
    prev() {
      this.updateFrom(this.from - 5)
      if (this.to === this.products.length) {
        if (this.to % 5 !== 0) {
          this.updateTo(this.to - this.to % 5)
        } else {
          this.updateTo(this.to - 5)
        }
      } else {
        this.updateTo(this.to - 5)
      }
      this.updateCurrentPage(this.currentPage - 1)
      this.updateDraft(this.products.slice(this.from - 1, this.to))
    }
  },
  watch: {
    products() {
      if (this.products.length > 0 && this.products.length < 6) {
        this.updateFrom(1)
        this.updateTo(this.products.length)
        this.updateDraft(this.products)
      } else {
        this.updateDraft(this.products.slice(this.from - 1, this.to))
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.productList {
  .textCenter {
    text-align: center;
  }

  .textGreen {
    color: #39cd74;
  }

  .textRed {
    color: #f54b5e;
  }

  .textMain {
    color: #0080dd;
  }

  table {
    border: 1px solid #d8e0ea;
    border-spacing: 0;
    width: 900px;

    th {
      background: #f2f6fe;
      padding: 14px;
      border-right: 1px solid #d8e0ea;
      border-bottom: 1px solid #d8e0ea;
    }

    td {
      text-align: left;
      padding: 12px;
      font-size: 14px;
      border-right: 1px solid #d8e0ea;
    }

    .editButton {
      background: #f2994a;
      border: unset;
      font-size: 14px;
      font-weight: bold;
      color: #fff;
      width: 60px;
      height: 40px;
      border-radius: 5px;
      cursor: pointer;
    }

    .deleteButton {
      background: #f54b5e;
      border: unset;
      font-size: 14px;
      font-weight: bold;
      color: #fff;
      width: 60px;
      height: 40px;
      border-radius: 5px;
      cursor: pointer;
      margin-left: 8px;
    }
  }

  .paginationWrap {
    margin: 16px 0 32px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .paginationDetail {
      color: #253036;
    }

    .paginationButton {
      width: 32px;
      height: 32px;
      margin-left: 4px;
      padding: 3px;
      cursor: pointer;
      background: #fff;
      border: 1px solid #253036;

      img {
        width: 100%;
        height: 25px;
      }

      &.isButtonDisabled {
        background: #d8e0ea;
        cursor: not-allowed;
        opacity: 0.5;
      }
    }
  }

}
</style>