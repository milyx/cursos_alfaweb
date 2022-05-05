<template>
  <div>
    <NavBar />
    <div class="p-5 form">
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-input
          id="curso-input"
          placeholder="Nombre"
          v-model="curso"
          :state="cursoState"
          required
        ></b-form-input>
        <b-form-input
          id="image-input"
          class="my-3"
          placeholder="URL de la imagen del curso"
          v-model="image"
          :state="imageState"
          required
        ></b-form-input>
        <b-form-input
          id="cupos-input"
          placeholder="Cupos del curso"
          type="number"
          v-model="cupos"
          :state="cuposState"
          required
        ></b-form-input
        ><b-form-input
          id="inscritos-input"
          class="my-3"
          type="number"
          placeholder="Inscritos en el curso"
          v-model="inscritos"
          :state="inscritosState"
          required
        ></b-form-input>
        <b-form-input
          id="duracion-input"
          placeholder="Duración del curso"
          v-model="duracion"
          :state="duracionState"
          required
        >
        </b-form-input>
        <b-form-input
          id="costo-input"
          class="my-3"
          type="number"
          v-model="costo"
          placeholder="Costo del curso"
          :state="costoState"
          required
        >
        </b-form-input>
        <b-form-input
          id="codigo-input"
          class="my-3"
          placeholder="Código del curso"
          v-model="codigo"
          :state="codigoState"
          required
        ></b-form-input>
        <b-form-textarea
          id="textarea"
          class="my-3"
          v-model="text"
          placeholder="Descripción del curso"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
        <b-button variant="danger" @click="updateCourse()" class="mx-3"
          >Actualizar</b-button
        >
        <b-button variant="outline-primary" @click="returnPage()"
          >Regresar</b-button
        >
      </form>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "EditCourseView",
  components: {
    NavBar,
  },
  data() {
    return {
      curso: "",
      cursoState: null,
      image: "",
      imageState: null,
      cupos: "",
      cuposState: null,
      inscritos: "",
      inscritosState: null,
      duracion: "",
      duracionState: null,
      costo: "",
      costoState: null,
      codigo: "",
      codigoState: null,
      descripcion: "",
    };
  },
  methods: {
    ...mapGetters(["getCards"]),
    obtenerCards() {
      for (let i = 0; i < this.getCards.length; i++) {
        if (this.getCards[i].idFirebase === this.$route.params.editedId) {
          this.curso = this.getCards[i].curso;
          this.image = this.getCards[i].image;
          this.cupos = this.getCards[i].cupos;
          this.inscritos = this.getCards[i].inscritos;
          this.duracion = this.getCards[i].duracion;
          this.costo = this.getCards[i].costo;
          this.codigo = this.getCards[i].codigo;
          this.descripcion = this.getCards[i].descripcion;
        }
      }
    },
    returnPage() {
      this.$router.push("/admin");
    },
    ...mapActions(["newUpdate"]),
    updateCourse() {
      const newData = {
        curso: this.curso,
        image: this.image,
        cupos: this.cupos,
        inscritos: this.inscritos,
        duracion: this.duracion,
        costo: this.costo,
        codigo: this.codigo,
        descripcion: this.descripcion,
        id: this.$route.params.editedId,
      };
      this.newUpdate(newData);
      alert("Sus datos se han actualizado exitosamente!");
      this.$router.push(`/admin`);
    },
  },
  computed: {
    ...mapGetters(["getCards"]),
  },
  mounted() {
    this.obtenerCards();
  },
};
</script>
<style>
.form {
  width: 60rem;
  margin: auto;
  padding-top: 50px;
}
</style>
