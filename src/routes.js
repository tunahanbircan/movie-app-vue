import VueRouter from "vue-router";
import Home from "./components/front/Home";
import Movie from "./components/movies/Movie";
import Favori from "./components/favorites/Favorites";

let router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/movie/:id",
      name: "movie",
      component: Movie,
    },
    {
      path: "/favorites",
      name: "favorites",
      component: Favori,
    },
  ],
});

export default router;
