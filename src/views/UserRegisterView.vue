<template>
  <div>
    <b-container fluid="sm" class="form">
      <b-form>
        <h1>Registro de usuarios</h1>
        <b-form-group
          id="input-group-1"
          label="Email:"
          label-for="input-1"
          class="my-3"
        >
          <b-form-input
            id="email"
            class="my-3"
            v-model="email"
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
            v-model="password"
            placeholder="Ingrese su contraseña"
            type="password"
            required
          ></b-form-input>
        </b-form-group>
      </b-form>
      <div class="buttons">
        <b-button type="button" @click="register" variant="primary" class="mx-4"
          >Registrar</b-button
        >
        <b-button type="reset" @click="reset" variant="danger"
          >Limpiar Formulario</b-button
        >
        <b-button type="buttons" @click="back" class="mx-4" variant="success"
          >Volver</b-button
        >
      </div>
    </b-container>
  </div>
</template>

<script>
import router from "@/router";
import { mapActions } from "vuex";
export default {
  name: "UserRegisterView",
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    ...mapActions(["createUser"]),
    register() {
      console.log({
        email: this.email,
        password: this.password,
      });

      this.createUser({
        email: this.email,
        password: this.password,
      });
    },
    back() {
      router.push("/login");
    },
    reset() {
      this.email = "";
      this.password = "";
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
  height: 22rem;
  margin-top: 70px;
  background-color: rgb(243, 243, 243);
}
.buttons {
  display: flex;
  justify-content: center;
}
</style>
