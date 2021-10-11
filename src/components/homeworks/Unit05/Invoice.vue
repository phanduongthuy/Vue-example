<template>
  <BaseLayout :isActive="isActive">
    <template #title-header>
      <b>Quản lý hóa đơn</b>
    </template>
    <template #main-content>
      <h1>Trang quản lý hóa đơn</h1>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
export default {
  name: "Invoice",
  components: {BaseLayout},
  data(){
    return{
      isActive:'3'
    }
  }
}
</script>

<style scoped>

</style>