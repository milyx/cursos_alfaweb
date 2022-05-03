<template>
  <div>
    <NavBar />
    <b-container>
      <b-form @reset="onReset" v-if="show" class="form">
        <b-form-group
          id="input-group-1"
          label="Email:"
          label-for="input-1"
          class="my-3"
        >
          <b-form-input
            id="email"
            class="my-3"
            v-model="form.email"
            type="email"
            placeholder="Ingrese su Email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Contraseña:"
          label-for="input-2"
        >
          <b-form-input
            id="password"
            class="my-3"
            v-model="form.password"
            placeholder="Ingrese su contraseña"
            type="password"
            required
          ></b-form-input>
        </b-form-group>
      </b-form>

      <b-col class="buttons">
        <b-button type="button" @click="starNow" variant="primary" class="mx-4"
          >Entrar</b-button
        >
        <b-button type="reset" @click="resetNow()" variant="danger"
          >Reset</b-button
        ></b-col
      >
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
//import router from "@/router";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "UserLoginView",
  components: {
    NavBar,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    ...mapActions(["startSession"]),
    starNow() {
      this.startSession({
        email: this.form.email,
        password: this.form.password,
      });
    },
    //hacer evento reset
    resetNow() {
      //console.log("hola");
      this.form.email = "";
      this.form.password = "";
    },
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>
<style>
.form {
  padding-top: 9rem;
  width: 50rem;
  margin: auto;
}
.buttons {
  display: flex;
  justify-content: center;
}
</style>
