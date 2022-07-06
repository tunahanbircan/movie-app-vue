<script>
import PopularMovies from "./PopularMovies";

export default {
  components: {
    PopularMovies,
  },
  mounted() {
    console.log(
      "Your process.env.VUE_APP_PUBLIC_URL",
      process.env.VUE_APP_PUBLIC_URL
    );
  },
};
</script>

<template>
  <div class="container mx-auto">
    <PopularMovies />
  </div>
</template>

<style></style>
