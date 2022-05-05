<template>
  <div>
    <b-navbar toggleable="false" type="dark" variant="secondary" class="nav">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle
      ><span class="title">Cursos Alfaweb</span>
      <b-navbar-brand class="email" @click="salir" href="#"
        >{{ user
        }}<b-icon icon="box-arrow-right" class="h2">></b-icon></b-navbar-brand
      >
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/home" class="route">Home</router-link>
          <router-link to="/admin" class="route">Admin</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import router from "@/router";
import { mapActions, mapState } from "vuex";
export default {
  name: "NavBar",
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["signOff"]),
    salir() {
      this.signOff();
      localStorage.setItem("loggedIn", "false");
      router.push("/login");
    },
  },
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.route {
  color: white;
  text-decoration: none;
  padding: 5px 20px;
}
.nav {
  padding-left: 20px;
  justify-content: space-between;
}
.title {
  color: aliceblue;
  font-size: 25px;
  padding-left: 30px;
}
.email {
  font-size: 13px;
}
</style>
