<template>
  <b-container>
    <b-row>
      <b-col sm="12" class="add">
        <span class="display-5">Administración</span>
        <b-button
          v-b-modal.modal-prevent-closing
          variant="outline-primary"
          class="mx-3"
          >AGREGAR CURSO</b-button
        >
      </b-col>
      <b-col>
        <b-modal
          id="modal-prevent-closing"
          ref="modal"
          title="Agregando Curso"
          @show="resetModal"
          @hidden="resetModal"
          @ok="handleOk"
        >
          <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-input
              id="curso-input"
              placeholder="Nombre"
              v-model="curso"
              :state="cursoState"
              required
            ></b-form-input>
            <b-form-input
              class="my-3"
              id="image-input"
              type="url"
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
              class="my-3"
              id="inscritos-input"
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
              class="my-3"
              id="costo-input"
              type="number"
              v-model="costo"
              placeholder="Costo del curso"
              :state="costoState"
              required
            >
            </b-form-input>
            <b-form-input
              id="codigo-input"
              placeholder="Código del curso"
              v-model="codigo"
              :state="codigoState"
              required
            ></b-form-input>
            <b-form-input
              class="my-3"
              id="fecha-input"
              type="date"
              placeholder="Fecha"
              v-model="fecha"
              :state="fechaState"
              required
            ></b-form-input>
            <b-form-textarea
              id="descripcion-input"
              v-model="descripcion"
              :state="descripcionState"
              placeholder="Descripción del curso"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </form>
          <div>
            <b-form-group label="Terminado" v-slot="{ ariaDescribedby }">
              <b-form-radio
                v-model="terminado"
                :state="terminadoState"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                value="true"
                >Si</b-form-radio
              >
              <b-form-radio
                v-model="terminado"
                :state="terminadoState"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                value="false"
                >No</b-form-radio
              >
            </b-form-group>

            <div class="mt-3">
              Seleccionó: <strong>{{ terminado }}</strong>
            </div>
          </div>
        </b-modal>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "InfoModal",
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
      fecha: "",
      fechaState: null,
      terminado: "",
      terminadoState: null,
      descripcion: "",
      descripcionState: null,
    };
  },
  methods: {
    ...mapActions(["saveData"]),
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvent) {
      const data = {
        curso: this.curso,
        image: this.image,
        cupos: this.cupos,
        inscritos: this.inscritos,
        duracion: this.duracion,
        costo: this.costo,
        codigo: this.codigo,
        fecha: this.fecha,
        terminado: this.terminado,
        descripcion: this.descripcion,
      };

      this.saveData(data);
      bvModalEvent.preventDefault();
      this.handleSubmit();
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }

      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
};
</script>
<style>
.add {
  padding: 20px;
  text-align: center;
}
</style>
