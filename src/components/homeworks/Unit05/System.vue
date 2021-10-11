<template>
  <BaseLayout :isActive="isActive">
    <template #title-header>
      <b>Cài đặt hệ thống</b>
    </template>
    <template #main-content>
      <h1>Trang cài đặt hệ thống</h1>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
export default {
  name: "System",
  components: {BaseLayout},
  data(){
    return{
      isActive:'6'
    }
  }
}
</script>

<style scoped>

</style>