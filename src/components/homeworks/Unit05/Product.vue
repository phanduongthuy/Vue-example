<template>
  <BaseLayout :isActive="isActive">
    <template #title-header>
      <b>Sản phẩm</b>
    </template>
    <template #main-content>
      <h1>Trang sản phẩm</h1>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
export default {
  name: "Product",
  components: {BaseLayout},
  data(){
    return{
      isActive:'5-1'
    }
  }
}
</script>

<style scoped>

</style>