<template>
  <div>
    <NavBar />
    <InfoCard :data="courses" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import InfoCard from "@/components/InfoCard.vue";
import { mapState } from "vuex";

export default {
  name: "HomePageView",
  components: {
    NavBar,
    InfoCard,
  },
  computed: {
    ...mapState(["courses"]),
  },
};
</script>
