import Vue from "vue";
import VueRouter from "vue-router";
import Users from "../views/Users.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Users",
    component: Users
  },
  {
    path: "/add-person",
    name: "AddPerson",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "add-person" */ "../views/AddPerson.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
