<template>
  <div>
    <b-container fluid="sm" class="form">
      <b-form v-if="show">
        <h1>Cursos Alfaweb</h1>
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
      <div>
        <b-col class="buttons">
          <b-button
            type="button"
            @click="starNow"
            variant="primary"
            class="mx-4"
            >Iniciar</b-button
          >
          <b-button type="reset" @click="resetNow" variant="danger"
            >Limpiar Formulario</b-button
          ></b-col
        >
      </div>
      <b-button type="button" @click="register" variant="light" class="button"
        >Registrarse
      </b-button>
    </b-container>
  </div>
</template>

<script>
import router from "@/router";
import { mapActions } from "vuex";
export default {
  name: "UserLoginView",
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
    resetNow() {
      this.form.email = "";
      this.form.password = "";
    },
    register() {
      router.push("/userregister");
    },
  },
};
</script>
<style>
.content {
  width: 50%;
  margin: auto;
  padding-top: 7rem;
}
.form {
  padding: 30px;
  width: 35rem;
  height: 28rem;
  margin-top: 70px;
  background-color: rgb(243, 243, 243);
}
.buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.button {
  text-align: center;
  background: rgb(185, 184, 184);
  padding: 10px 10rem;
  margin: 0 3rem;
}
</style>
