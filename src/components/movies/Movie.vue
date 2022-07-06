<script>
import Cast from "./Cast";
import Images from "./Images";
import MediaModel from "../models/MediaModel";
import store from "../../store";

export default {
  components: {
    Cast,
    Images,
    MediaModel,
  },
  data() {
    return {
      movie: {
        credits: {
          crew: {},
        },
        images: {
          backdrops: {},
        },
      },
      modelOpen: false,
      isVideo: false,
      mediaURL: "",
    };
  },
  computed: {
    buttonText() {
      return this.isFavoriteMovie ? "Favorilerden çıkar" : "Favorilere ekle"
    },
    isFavoriteMovie(){
      return store.favorites.find((f)=>{
        return this.movie.id === f.id
      })
    },
    posterPath() {
      return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
    },
  },

  watch: {
    "$route.params.id": {
      handler() {
        this.fetchMovie(this.$route.params.id);
      },
      immediate: true,
    },
  },
  methods: {
    async fetchMovie(movieId) {
      const response = await this.$http.get(
        "/movie/" + movieId + "?append_to_response=credits,videos,images"
      );
      this.movie = response.data;
    },
    openImageModel() {
      this.isVideo = false;
      this.modelOpen = true;
    },
    showImageModel(imageFullPath) {
      this.mediaURL = imageFullPath;
      this.isVideo = false;
      this.modelOpen = true;
    },
    handleFavoriteButton(){
      if( this.isFavoriteMovie ) {
        store.favorites = store.favorites.filter((f) => {
          return f.id !== this.movie.id
        })
        
        return 
      }

      store.favorites.push(this.movie)
    }
  },
};
</script>

<template>
  <div>
    <div class="container mx-auto flex mt-20 border-b border-gray-600 pb-2">
      <img :src="posterPath" alt="" class="rounded-md w-96 h-112" />
      <div class="ml-24">
        <h1 class="text-4xl font-semibold">{{ this.movie.title }}</h1>
        <span class="text-gray-500 text-sm flex">
          <svg
            class="fill-current text-yellow-500 w-4 h-4 mr-1"
            viewBox="0 0 24 24"
          >
            <g data-name="Layer 2">
              <path
                d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                data-name="star"
              />
            </g>
          </svg>
          {{ this.movie.vote_average * 10 }} % | {{ movie.release_date }}

          <span :key="index" v-for="(item, index) in movie.genres" class="ml-1">
            {{ item.name }}
            <span v-if="movie.genres.length - 1 != index">,</span>
          </span>
        </span>
        <p class="mt-5">
          {{ this.movie.overview }}
        </p>

        <div class="mt-5">
          <span class="mt-5 font-semibold">Featured Cast</span>

          <div class="flex">
            <div :key="index" v-for="(crew, index) in movie.credits.crew">
              <div v-if="index < 2" class="flex flex-col mt-5 mr-5">
                <span>{{ crew.name }}</span>

                <span class="text-gray-500">{{ crew.job }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <button
            @click="handleFavoriteButton"
            class="rounded px-5 py-3 inline-flex text-black transition duration-300"
            :class = "{ 'bg-red-500' : isFavoriteMovie, 'bg-blue-500' : !isFavoriteMovie}"
          >
            <img src="@/assets/images/heart-white.png" alt="" />
            <span class="ml-3">{{buttonText}}</span>
          </button>
        </div>
      </div>
    </div>

    <Cast :casts="movie.credits.cast.slice(0,12)" />
    <Images
      :images="movie.images.backdrops.slice(0,8)"
      v-on:on-image-click="showImageModel"
    />
    <MediaModel
      v-model="modelOpen"
      :mediaURL="mediaURL"
      :isVideo="this.isVideo"
    />
  </div>
</template>

<style></style>
