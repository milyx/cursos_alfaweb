<template>
  <div>
    <b-navbar toggleable="false" type="dark" variant="secondary" class="button">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle
      ><span class="title">Cursos Alfaweb</span>
      <b-navbar-brand @click="salir" href="#"
        >{{ dato.usuario
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
    //...mapGetters(["getUser"]),
    dato: function () {
      return {
        usuario: this.user,
      };
    },
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
.route {
  color: white;
  text-decoration: none;
  padding: 5px 20px;
}
.button {
  padding-left: 20px;
}
.title {
  color: aliceblue;
  font-size: 25px;
}
</style>
