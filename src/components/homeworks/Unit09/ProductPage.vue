<template>
  <div class="productPage">
    <BaseLayout>
      <template #header>
        Quản lý sản phẩm
      </template>
      <el-card>
        <div class="headerContent">
          <div class="searchWarp">
            <el-input
                v-model="searchKey"
                class="style-input-search inputSearch"
                placeholder="Nhập vào tên SP để tìm kiếm"
                clearable>
            </el-input>
            <el-button class="inputSearch" icon="el-icon-search" @click="handleSearch">Tìm kiếm</el-button>
          </div>
          <div class="excelWarp">
            <a class="el-button el-button--primary is-plain btn-create" @click="openDialogAddProduct">
              <i class="el-icon-plus"></i>
              <span>Tạo mới</span>
            </a>
          </div>
        </div>
      </el-card>
      <el-card class="card-table">
        <el-table
            :data="products"
            border
            style="width: 100%" class="table-products">
          <el-table-column
              prop="id"
              label="ID"
              width="50">
          </el-table-column>
          <el-table-column
              label="Ảnh sản phẩm"
              width="150">
            <template slot-scope="product">
              <el-avatar shape="square" v-if="product.row.image"
                         :size="60"
                         fit="cover"
                         :src="`http://vuecourse.zent.edu.vn/storage/${product.row.image}`">

              </el-avatar>
              <el-avatar shape="square" v-else
                         :size="70"
                         fit="cover"
                         src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">

              </el-avatar>
            </template>
          </el-table-column>
          <el-table-column
              prop="name"
              label="Tên sản phẩm"
              width="180">
          </el-table-column>
          <el-table-column
              label="Giá sản phẩm"
              width="150"
              >
            <template slot-scope="product">
              <span>{{ formatPrice(product.row.price) }}</span>
            </template>
          </el-table-column>
          <el-table-column
              prop="description"
              label="Mô tả"
              width="250">
          </el-table-column>
          <el-table-column
              label="Hành động">
            <template slot-scope="scope">
              <el-button
                  size="mini"
                  @click="handleEdit(scope.row)">Cập nhật</el-button>
              <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.row.id)">Xóa</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-row v-if="products.length>0">
          <el-col :span="14">
            <div class="textInfo">
              <p>Số lượng kết quả: {{ page.from }} - {{ page.to }} của {{ page.total }} </p>
            </div>
          </el-col>

          <el-col :span="10">
            <el-pagination
                layout="prev, pager, next"
                :total="page.total"
                :page-size="page.pageSize"
                :current-page="page.currentPage"
                @current-change="handleCurrentChange"
            >
            </el-pagination>
          </el-col>

        </el-row>
      </el-card>
    </BaseLayout>
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
      <el-form ref="form" label-width="200px">
        <el-form-item label="Ảnh sản phẩm">
          <Upload @changeImage="onChangeImage" :url="url"/>
        </el-form-item>
        <el-form-item label="Tên sản phẩm">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="Giá sản phẩm">
          <el-input type="number" min="1" v-model="price"></el-input>
        </el-form-item>
        <el-form-item label="Mô tả sản phẩm">
          <el-input type="textarea" v-model="description"></el-input>
        </el-form-item>
        <el-form-item class="submit">
          <el-button type="primary" v-if="flag" @click="onSubmit">Lưu</el-button>
          <el-button type="primary" v-else @click="handleUpdate(id)">Cập nhật</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import BaseLayout from "./BaseLayout";
import Upload from "../../upload/Upload";
import axios from "axios";
export default {
  name: 'ProductPage',
  components: {
    BaseLayout,
    Upload
  },
  data () {
    return {
      title: '',
      searchKey: '',
      products: [],
      page: {
        currentPage: 1,
        pageSize: 5,
        total: 0,
        from: 0,
        to: 0
      },
      dialogFormVisible: false,
      id: '',
      name: '',
      price: '',
      description: '',
      errName: '',
      errPrice: '',
      formLabelWidth: '120px',
      editProduct: [
        {
          id: '',
          name: '',
          price: '',
          description: ''
        }
      ],
      flag: true,
      url: '',
      imageUrl: '',
    }
  },
  methods: {
    onChangeImage(img) {
      this.imageUrl = img
    },
    openDialogAddProduct() {
      this.reset()
      this.dialogFormVisible = true
      this.title = 'Thêm mới sản phẩm'
    },
    handleSearch() {
      this.getProducts()
    },
    handleEdit(value){
      this.title = 'Cập nhật sản phẩm'
      this.id = value.id
      this.name = value.name
      this.price = value.price
      this.description = value.description
      this.url = value.image
      this.flag = false
      this.dialogFormVisible = true
    },
    handleUpdate(id) {
      let formData = new FormData();
      formData.append("name", this.name);
      formData.append("price", this.price);
      formData.append("description", this.description);
      if(this.imageUrl !== '') {
        formData.append("image", this.imageUrl);
      }
      axios.post('http://vuecourse.zent.edu.vn/api/products/' + id,
        formData, {
          headers:
            {
              'Content-Type': 'multipart/form-data'
            }
        }).then(() => {
        // handle success
        this.reset()
        this.getProducts()
        this.$message({
          type: 'success',
          message: 'Cập nhật thành công!'
        });
      }).catch(() => {
        // handle error
      });
    },
    handleDelete(id) {
      this.$confirm('Bạn có chắc chắn muốn xóa sản phẩm này?', 'Cảnh báo', {
        confirmButtonText: 'Xóa',
        cancelButtonText: 'Hủy',
        type: 'warning'
      }).then(() => {
        axios({
          method: 'delete',
          url: 'http://vuecourse.zent.edu.vn/api/products/' + id,

        }).then(() => {
          // handle success
          this.getProducts()
        }).catch(() => {
          // handle error
          alert('Xóa không thành công!')
        });
        this.$message({
          type: 'success',
          message: 'Xóa thành công!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Xóa thất bại!'
        });
      });

    },
    onSubmit() {
      let formData = new FormData();
      formData.append("name", this.name);
      formData.append("price", this.price);
      formData.append("description", this.description);
      if(this.imageUrl !== '') {
        formData.append("image", this.imageUrl);
      }
      axios.post('http://vuecourse.zent.edu.vn/api/products',
        formData,
  {
          headers:
              {
                'Content-Type': 'multipart/form-data'
              }
        }
      ).then(() => {
        // handle success
        this.reset()
        this.getProducts()
        this.$message({
          type: 'success',
          message: 'Thêm mới thành công!'
        });
      }).catch(() => {
        // handle error
      });
    },
    handleCurrentChange(value) {
      this.getProducts(value)
    },
    reset() {
      this.imageUrl = ''
      this.url = ''
      this.name = '',
      this.price = '',
      this.description = '',
      this.dialogFormVisible = false
      this.flag = true
    },
    getProducts(val = 1) {
      let q = this.searchKey
      let page  = val

      axios({
        method: 'get',
        url: 'http://vuecourse.zent.edu.vn/api/products' ,
        params: {
          q: q,
          page: page
        }
      }).then((response) => {
        // handle success
        this.products = response.data.data.data
        this.page.from = response.data.data.from
        this.page.to = response.data.data.to
        this.page.current_page = response.data.data.current_page
        this.page.last_page = response.data.data.last_page
        this.page.per_page = response.data.data.per_page
        this.page.total = response.data.data.total
      }).catch(() => {
        // handle error
      });
    },
    formatPrice(val) {
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val)
    }
  },
  mounted() {
    this.getProducts()
  },
  watch: {
    searchKey:function () {
      if(this.searchKey.length === 0){
        this.getProducts()
      }
    },
  }
}
</script>

<style lang="scss" scoped>

.productPage {
  width: 100%;
  .headerContent {
    display: flex;
    align-content: center;
    justify-content: space-between;

    .searchWarp {
      display: flex;
      width: 60%;

      .inputSearch {
        margin-right: 15px;
      }

      .style-input-search {
        width: 50%;
      }
    }
  }
  .el-card {
    margin-top: 20px;
    padding: 0;
  }
  .submit {
    text-align: right;
  }

}
.hideUpload > div {
  display: none;
}
</style>