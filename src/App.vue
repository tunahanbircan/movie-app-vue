<script>
import Navbar from "./components/header/Navbar";
import Searchbar from "./components/header/Searchbar";

export default {
  name: "App",
  components: {
    Navbar,
    Searchbar,
  },
};
</script>

<template>
  <div id="app">
    <div class="flex justify-between border-b border-gray-500">
      <Navbar />
      <Searchbar />
    </div>

    <router-view />
  </div>
</template>

<style></style>
