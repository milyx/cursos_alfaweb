<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col sm="6" lg="4" v-for="(item, i) in data" :key="i" class="my-5">
        <b-card-group deck>
          <b-card
            class="card"
            img-height="150px"
            img-width="60px"
            :title="item.curso"
            :img-src="item.image"
            img-alt="Image"
            img-top
          >
            <b-card-text class="sub-title"> Información </b-card-text>
            <template>
              <b-list-group flush>
                <b-list-group-item>Costo: {{ item.costo }}</b-list-group-item>
                <b-list-group-item
                  >Duración: {{ item.duracion }}</b-list-group-item
                >
                <b-list-group-item>Cupos: {{ item.cupos }}</b-list-group-item>
                <b-list-group-item
                  >Completado: {{ item.terminado }}</b-list-group-item
                >
                <b-list-group-item
                  >Fecha de registro: {{ item.fecha }}</b-list-group-item
                >
                <b-list-group-item
                  >Descripcion: {{ item.descripcion }}</b-list-group-item
                >
              </b-list-group>
            </template>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style>
.card {
  width: 350px;
  margin: auto;
}
.card-body {
  background-color: rgb(233, 239, 237);
}
.list-group-item {
  background-color: rgb(0 0 0 / 6%);
}
</style>
