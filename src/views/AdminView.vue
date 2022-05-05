<template>
  <div>
    <NavBar />
    <InfoModal />
    <b-container>
      <b-row>
        <b-col md="12">
          <b-table striped hover :items="courses" :fields="fields">
            <template #cell(opciones)="row">
              <b-button
                size="sm"
                @click="editItem(row.item.idFirebase)"
                class="mr-1 icon-edit"
              >
                <b-icon icon="pencil-fill"></b-icon>
              </b-button>
              <b-button
                size="sm"
                @click.prevent="deleteItems(row.item.idFirebase)"
                class="mr-1 mx-3 icon-delete"
              >
                <b-icon icon="trash" class=""></b-icon>
              </b-button>
            </template>
          </b-table>
        </b-col>
        <b-col class="table">
          <div class="p-5">
            <b-alert show variant="primary"
              ><b-icon icon="people-fill" class="mx-3 py-3"></b-icon>Cantidad
              total de alumnos permitidos:{{ datos.alumnosPermitidos }}</b-alert
            >
            <b-alert show variant="secondary">
              <b-icon icon="person-check-fill" class="mx-3 py-3"></b-icon
              >Cantidad total de alumnos inscritos:{{
                datos.alumnosInscritos
              }}</b-alert
            >
            <b-alert show variant="success"
              ><b-icon icon="person-dash-fill" class="mx-3 py-3"></b-icon
              >Cantidad total de cupos restantes:{{
                datos.cuposRestantes
              }}</b-alert
            >
            <b-alert show variant="danger"
              ><b-icon icon="slash-circle" class="mx-3 py-3"></b-icon>Cantidad
              total de cursos terminados:{{
                datos.totalCursosTerminados
              }}</b-alert
            >
            <b-alert show variant="warning"
              ><b-icon icon="bell-fill" class="mx-3 py-3"></b-icon>Cantidad
              total de cursos activos:{{ datos.totalCursosActivos }}</b-alert
            >
            <b-alert show variant="info"
              ><b-icon icon="people-fill" class="mx-3 py-3"></b-icon>Cantidad
              total de cursos:{{ datos.cursosTotales }}</b-alert
            >
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import NavBar from "@/components/NavBar.vue";
import InfoModal from "@/components/InfoModal.vue";
export default {
  name: "AdminView",
  components: {
    NavBar,
    InfoModal,
  },
  data() {
    return {
      fields: [
        "curso",
        "cupos",
        "inscritos",
        "duracion",
        "costo",
        "terminado",
        "fecha",
        "opciones",
      ],
    };
  },
  computed: {
    ...mapState(["courses"]),
    datos: function () {
      let alumnosPermitidos = 0;
      let alumnosInscritos = 0;
      let totalCursosTerminados = 0;
      let totalCursosActivos = 0;
      let cursosTotales = 0;
      let cuposRestantes = 0;
      for (let i = 0; i < this.courses.length; i++) {
        alumnosPermitidos =
          parseInt(alumnosPermitidos) + parseInt(this.courses[i].cupos);
        alumnosInscritos =
          parseInt(alumnosInscritos) + parseInt(this.courses[i].inscritos);
        if (this.courses[i].terminado == "true") {
          totalCursosTerminados++;
        } else {
          totalCursosActivos++;
        }
        cursosTotales = this.courses.length;
      }
      cuposRestantes = alumnosPermitidos - alumnosInscritos;
      return {
        alumnosPermitidos,
        alumnosInscritos,
        cuposRestantes,
        totalCursosTerminados,
        totalCursosActivos,
        cursosTotales,
      };
    },
  },
  methods: {
    ...mapActions(["deleteItem"]),
    deleteItems(idFirebase) {
      this.deleteItem({ id: idFirebase });
    },
    editItem(idFirebase) {
      this.$router.push(`editcourse/${idFirebase}`);
    },
    updatedData() {
      console.log(this.courses);
      for (let i = 0; i < this.courses.length; i++) {
        this.alumnosPermitidos =
          parseInt(this.alumnosPermitidos) + parseInt(this.courses[i].cupos);
        this.alumnosInscritos =
          parseInt(this.alumnosInscritos) + parseInt(this.courses[i].inscritos);
        if (this.courses[i].terminado == true) {
          this.totalCursosTerminados++;
        } else {
          this.totalCursosActivos++;
        }
        this.cursosTotales = this.courses.length;
      }
      this.cuposRestantes = this.alumnosPermitidos - this.alumnosInscritos;
    },
  },
};
</script>
<style>
.table {
  padding: 50px;
}
.icon-delete {
  background: red;
}
.icon-edit {
  background: blue;
}
</style>
