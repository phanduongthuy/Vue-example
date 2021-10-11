<template>
  <el-container>
    <el-aside>
      <el-row class="tac">
        <el-menu
            default-active="1"
            class="el-menu-vertical"
            background-color="#1D2939"
            text-color="#fff"
            active-text-color="#ffd04b">
          <el-menu-item index="1" @click="pushParams('')">
            <i class="el-icon-menu"></i>
            <span>Tổng quan</span>
          </el-menu-item>
          <el-menu-item index="2" @click="pushParams('product-management')">
            <i class="el-icon-box"></i>
            <span>Quản lý sản phẩm</span>
          </el-menu-item>
          <el-menu-item index="3" @click="pushParams('invoice-management')">
            <i class="el-icon-document"></i>
            <span>Quản lý hóa đơn</span>
          </el-menu-item>
          <el-menu-item index="4" @click="pushParams('statistic')">
            <i class="el-icon-s-data"></i>
            <span>Báo cáo thống kê</span>
          </el-menu-item>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>Quản lý chi nhánh</span>
            </template>
            <el-menu-item-group title="Hoạt động">
              <el-menu-item index="5-1" @click="pushParams('product')">Sản phẩm</el-menu-item>
              <el-menu-item index="5-2" @click="pushParams('order')">Đơn hàng</el-menu-item>
              <el-menu-item index="5-3" @click="pushParams('customer')">Khách hàng</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Báo cáo">
              <el-menu-item index="5-4" @click="pushParams('revenue')">Doanh thu</el-menu-item>
              <el-menu-item index="5-5" @click="pushParams('inventory')">Tồn kho</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="6" @click="pushParams('system-setting')">
            <i class="el-icon-s-tools"></i>
            <span>Cài đặt hệ thống</span>
          </el-menu-item>
        </el-menu>
      </el-row>
    </el-aside>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="21">
            <slot name="title-header"><h3>Trang chủ</h3></slot>
          </el-col>
          <el-col :span="3">
            <el-menu :default-active="active"
                     class="el-menu-navbar"
                     mode="horizontal"
                     background-color= "#E9EEF3"
                     text-color="black"
                     active-text-color="black">
              <el-menu-item>
                <el-badge :value="12" class="item">
                  <i class="el-icon-bell"></i>
                </el-badge>
              </el-menu-item>

              <el-menu-item>
                <el-dropdown>
                  <span class="el-dropdown-link">
                  <div class="block"><el-avatar :src="avatar" :size="size" ></el-avatar></div>

                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Thông tin tài khoản</el-dropdown-item>
                    <el-dropdown-item>Đổi mật khẩu</el-dropdown-item>
                    <el-dropdown-item>Cấu hình</el-dropdown-item>
                    <el-dropdown-item divided ><p @click="pushParams('login')">Đăng xuất</p></el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>

      </el-header>
      <el-main>
        <slot name="main-content">
          <h1>
            Đây là trang chủ
          </h1>
          <router-view/>
        </slot>
      </el-main>
      <el-footer>&copy; Phan Dương Thùy</el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'BaseLayout',

  data(){
    return {
      active: '',
      size: 'medium',
      avatar: "https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-9/125988800_1074119919701221_4925611912916530605_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vfPUdepHeJUAX9f4Hvt&_nc_ht=scontent.fhph1-2.fna&oh=7134b90b2c8642f21439abcda665f70c&oe=618383B0",
    }
  },

  methods: {
    pushParams(value){
      this.$router.push({ path: `/${value}`})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../../assets/homeworks/Unit05/BaseLayout";
</style>
