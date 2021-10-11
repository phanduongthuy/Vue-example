<template>
  <BaseLayout :isActive="isActive">
    <template #title-header>
      <b>Báo cáo thống kê</b>
    </template>
    <template #main-content>
      <h1>Trang báo cáo thống kê</h1>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
export default {
  name: "Report",
  components: {BaseLayout},
  data(){
    return{
      isActive:'4'
    }
  }
}
</script>

<style scoped>

</style>