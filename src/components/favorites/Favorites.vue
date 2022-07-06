<script>
import store from '../../store'
import MovieItem from '../items/MovieItem'

export default {
  components: {
    MovieItem
  },
  computed: {
    store(){
      return store
    },
    movies(){
      return store.favorites
    }
  }
}
</script>

<template>
  <div class="mx-5">
    <h2 class="uppercase mt-5 text-yellow-500 text-lg font-semibold">
      Favorites
    </h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-3"
    >
      <MovieItem
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>



<style>

</style>