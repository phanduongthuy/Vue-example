<template>
  <div>
    <div class="upload" @mouseover="showGuide=true" @mouseleave="showGuide=false">
      <input type="file" accept="image/*" id="upload" @change="uploadImage">
      <img v-if="url_image.length > 0" :src="url_image" alt="">
      <img v-else src="../../assets/logo.png" alt="">
      <transition name="el-zoom-in-top">
        <div v-show="showGuide" class="guide-top transition-box" @click="handleRemoveImage">
          <el-button type="text" class="textGuide">
            <i class="el-icon-close"></i>
          </el-button>
        </div>
      </transition>
      <transition name="el-zoom-in-bottom">
        <div v-show="showGuide" class="guide-bottom transition-box">
          <span class="textGuide" @click="chooseImage">
            Click để thay ảnh <i class="el-icon-camera-solid"></i>
          </span>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Upload",
  props:[
    'url'
  ],
  data (){
    return {
      base_url:'http://vuecourse.zent.edu.vn/storage/',
      url_default:'',
      url_image:'',
      file_img:'',
      showGuide:false
    }
  },
  methods:{
    chooseImage(){
      document.getElementById('upload').click()
    },
    uploadImage(e){
      if(e.target.files.length){
        this.file_img = e.target.files[0]
        this.url_image = URL.createObjectURL(this.file_img);
        this.$emit('changeImage',this.file_img)
      }
    },
    handleRemoveImage() {
      this.url = ''
      this.url_image = ''
      this.file_img = ''
      this.showGuide = false
    }

  },
  mounted() {
    if (this.url === '' || this.url.length === 0){
      this.url_image = this.url_default
    }else{
      this.url_image = this.base_url+this.url
    }
  },
  watch:{
    url(){
      if (this.url === '' || this.url.length === 0){
        this.url_image = ''
      }else{
        this.url_image = this.base_url+this.url
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/upload/upload";
</style>