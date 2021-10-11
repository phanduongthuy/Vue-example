<template>
  <BaseLayout :isActive="isActive">
    <template #title-header>
      <b>Đơn hàng</b>
    </template>
    <template #main-content>
      <h1>Trang quản lý đơn hàng</h1>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
export default {
  name: "Order",
  components: {BaseLayout},
  data(){
    return{
      isActive:'5-2'
    }
  }
}
</script>

<style scoped>

</style>