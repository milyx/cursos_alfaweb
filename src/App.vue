<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  created() {
    this.consultCourse();
  },
  methods: {
    ...mapActions(["consultCourse"]),
  },
};
</script>
