//import app from "@/helpers/firebase";
import router from "@/router";
import Vue from "vue";
import Vuex from "vuex";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { db } from "@/helpers/firebase.js";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    user: "",
    courses: [],
  },
  getters: {
    getCards(state) {
      return state.courses;
    },
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    SET_USER(state, value) {
      state.isAuthenticated = value;
    },
    SET_ERROR(state, value) {
      state.error = value;
    },
    SET_USER_MAIL(state, value) {
      state.user = value;
    },
    SET_DATA_CURSOS(state, value) {
      state.courses = value;
    },
    DELETE_CURSO(state, value) {
      for (let i = 0; i < state.courses.length; i++) {
        if (state.courses[i].idFirebase == value) {
          state.courses.splice(i, 1);
          break;
        }
      }
    },
    CREATE_COURSE(state, value) {
      state.courses.push(value);
    },
    FINAL_UPDATE(state, value) {
      for (let i = 0; i < state.courses.length; i++) {
        if (state.courses[i].idFirebase == value.id) {
          state.courses[i].curso = value.curso;
          break;
        }
      }
    },
  },
  actions: {
    async consultCourse({ commit }) {
      try {
        const request = await getDocs(collection(db, "cursos"));

        const data = request.docs.map((doc) => {
          const obj = {
            ...doc.data(),
            idFirebase: doc.id,
          };
          return obj;
        });

        commit("SET_DATA_CURSOS", data);
      } catch (error) {
        console.error(error);
      }
    },
    async startSession({ commit }, payload) {
      const email = payload.email;
      const password = payload.password;

      const auth = getAuth();

      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        commit("SET_USER", true);
        commit("SET_USER_MAIL", payload.email);
        console.log({ userCredential });
        localStorage.setItem("loggedIn", "true");
        router.push({ name: "home", force: true });
        setTimeout(function () {
          window.location.reload();
        }, 2000);
      } catch (error) {
        alert("Usuario inválido");
        console.error(error);
      }
    },

    signOff({ commit }) {
      commit("SET_USER", false);
    },
    createUser(payload) {
      const email = payload.email;
      const password = payload.password;

      try {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            alert("Usuario ingresado con éxito!");
            router.push("/login");
          })
          .catch((error) => {
            console.log(error);

            alert("Ocurrió un error");
          });
      } catch (error) {
        console.log(error);
        alert("Ocurrió un error");
      }
    },
    async deleteItem({ commit }, payload) {
      //console.log(payload);
      commit("DELETE_CURSO", payload.id);
      await deleteDoc(doc(db, "cursos", payload.id));
    },
    async saveData({ commit }, payload) {
      //console.log(payload);
      try {
        const docRef = await addDoc(collection(db, "cursos"), payload);
        console.log(docRef.id);
        payload = {
          ...payload,
          idFirebase: docRef.id,
        };
      } catch (error) {
        console.log(error);
      }
      commit("CREATE_COURSE", payload);
    },
    async newUpdate({ commit }, payload) {
      commit("FINAL_UPDATE", payload);
      const washingtonRef = doc(db, "cursos", payload.id);
      console.log(payload);
      await updateDoc(washingtonRef, {
        curso: payload.curso,
        image: payload.image,
        cupos: payload.cupos,
        inscritos: payload.inscritos,
        duracion: payload.duracion,
        descripcion: payload.descripcion,
      });
    },
  },
  modules: {},
});
