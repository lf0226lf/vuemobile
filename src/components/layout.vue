<template>
  <div>
    <ion-button @click="showLoading">Default</ion-button>
    <router-link to="about">
      <ion-button>点击跳转</ion-button>
    </router-link>
    <router-link to="one">
      <ion-button>第一个页面内容</ion-button>
    </router-link>
    <router-link to="two">
      <ion-button>第二个页面内容</ion-button>
    </router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods: {
    async showLoading() {
      const loading = await this.$ionic.loadingController.create({
        spinner: "hide",
        duration: 2000,
        message: "Please wait...",
        translucent: true,
        cssClass: "custom-class custom-loading"
      });
      loading.present();
    }
  }
};
</script>

<style scoped>
</style>