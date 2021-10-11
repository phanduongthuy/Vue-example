<template>
  <BaseLayout>
    <template v-slot:title-header>
      <h3>Quản lý sản phẩm</h3>
    </template>

    <template v-slot:main-content>
      <div class="product-list">
        <template>
          <el-table
              :data="tableData"
              border
              style="width: 100%">
            <el-table-column
                prop="date"
                label="Date"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="Name"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="Address">
            </el-table-column>
          </el-table>
        </template>
      </div>
      <div class="pagination">
        <template>
          <div class="block">
            <el-pagination
                background
                :current-page.sync="currentPage"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
            </el-pagination>
          </div>
        </template>
      </div>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
export default {
  name: 'ProductPage',
  components: {
    BaseLayout
  },
  data(){
    return {
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }
      ],
      currentPage: 4
    }
  },

  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pagination {
  margin-top: 20px;
  float: right;
}
</style>
