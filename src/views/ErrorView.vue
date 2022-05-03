<template>
  <div>
    <NavBar />
    <div class="img"></div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "ErrorView",
  components: {
    NavBar,
  },
};
</script>
<style scoped>
.img {
  background-image: url(../assets/error.jpg);
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  background-size: cover;
}
</style>
