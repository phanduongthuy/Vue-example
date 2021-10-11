<template>
  <BaseLayout :isActive="isActive">
    <template #title-header>
      <b>Tồn kho</b>
    </template>
    <template #main-content>
      <h1>Trang quản lý tồn kho</h1>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
export default {
  name: "Inventory",
  components: {BaseLayout},
  data(){
    return{
      isActive:'5-5'
    }
  }
}
</script>

<style scoped>

</style>