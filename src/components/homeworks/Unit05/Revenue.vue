<template>
  <BaseLayout :isActive="isActive">
    <template #title-header>
      <b>Doanh thu</b>
    </template>
    <template #main-content>
      <h1>Trang doanh thu</h1>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
export default {
  name: "Revenue",
  components: {BaseLayout},
  data(){
    return{
      isActive:'5-4'
    }
  }
}
</script>

<style scoped>
</style>