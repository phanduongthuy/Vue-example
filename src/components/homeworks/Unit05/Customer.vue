<template>
  <BaseLayout :isActive="isActive">
    <template #title-header>
      <b>Khách hàng</b>
    </template>
    <template #main-content>
      <h1>Trang khách hàng</h1>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
export default {
  name: "Customer",
  components: {BaseLayout},
  data(){
    return{
      isActive:'5-3'
    }
  }
}
</script>

<style scoped>

</style>