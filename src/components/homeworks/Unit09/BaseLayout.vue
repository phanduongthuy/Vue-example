<template>
  <el-container>
    <el-aside class="sideBar">
      <el-menu
          default-active="1"
          background-color="#001529"
          text-color="#fff"
          active-text-color="#ffd04b">
        <el-menu-item index="1" @click="pushParams('')">
          <i class="el-icon-menu"></i>
          <span>Tổng quan</span>
        </el-menu-item>
        <el-menu-item index="2" @click="pushParams('products')">
          <i class="el-icon-s-shop"></i>
          <span>Quản lý sản phẩm</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="header">
        <div class="headerLeftWrap">
          <slot name="header"></slot>
        </div>
        <div class="headerRightWrap">
          <el-badge :value="12" class="notification">
            <i class="el-icon-bell"></i>
          </el-badge>
          <el-dropdown>
            <el-avatar
                size="medium"
                shape="circle"
                src="https://saoexpress.vn/wp-content/uploads/2019/07/hot-girl-nguyen-thanh-thuy-Saoexpress-1.jpg"
            />
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Thông tin tài khoản</el-dropdown-item>
              <el-dropdown-item>Đổi mật khẩu</el-dropdown-item>
              <el-dropdown-item>Cấu hình</el-dropdown-item>
              <el-dropdown-item divided>
                Đăng xuất
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>

      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    pushParams(value){
      this.$router.push({ path: `/${value}`})
    }
  }
};
</script>

<style lang="scss" scoped>
$colorStroke: #d8e0ea;
$colorDefault: #253036;
$colorHeaderBg: #f2f6fe;

.sideBar {
  width: 170px;
  height: 100vh;
  background: #001529;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid $colorStroke;
  height: 60px;
  width: 100%;
  background: $colorHeaderBg;
  padding: 0 24px;

  .headerLeftWrap {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    color: $colorDefault;
  }

  .headerRightWrap {
    display: flex;
    align-items: center;

    .notification {
      margin-right: 40px;
      font-size: 24px;
    }
  }
}

.mainBody {
  width: 100%;
  padding: 24px;
}
</style>