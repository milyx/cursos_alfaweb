import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/UserLoginView.vue"),
  },
  {
    path: "/login",
    name: "logindirecto",
    component: () =>
      import(
        /* webpackChunkName: "logindirecto" */ "../views/UserLoginView.vue"
      ),
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "homepage" */ "../views/HomePageView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/AdminView.vue"),
  },
  {
    path: "/courselist",
    name: "courselist",
    component: () =>
      import(
        /* webpackChunkName: "courselist" */ "../views/CourseListView.vue"
      ),
  },
  {
    path: "/editcourse/:editedId",
    name: "editcourse",
    component: () =>
      import(
        /* webpackChunkName: "editcourse" */ "../views/EditCourseView.vue"
      ),
  },
  {
    path: "/userregister",
    name: "userregister",
    component: () =>
      import(
        /* webpackChunkName: "userregister" */ "../views/UserRegisterView.vue"
      ),
  },
  {
    path: "/*",
    name: "error",
    component: () =>
      import(/* webpackChunkName: "error" */ "../views/ErrorView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  next();
  /*
  const isAuthenticated = localStorage.getItem("loggedIn");
  if (isAuthenticated === "true") {
    if (
      to.name == "logindirecto" ||
      to.name == "login" ||
      to.name == "userregister"
    ) {
      next({ name: "home" });
    } else {
      next();
    }
  } else {
    if (
      to.name == "logindirecto" ||
      to.name == "login" ||
      to.name == "userregister"
    ) {
      next();
    } else {
      next({ name: "logindirecto" });
    }
  }
  */
});

export default router;
