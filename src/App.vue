<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  NavBar,
  created() {
    this.consultCourse();
  },
  methods: {
    ...mapActions(["consultCourse"]),
  },
};
</script>
