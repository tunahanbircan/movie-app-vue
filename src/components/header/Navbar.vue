<template>
  <div class="flex">
    <router-link to="/">
      <img class="h-12 rounded-full mr-1 mt-2" src="@/assets/images/logo.png" alt="" />
    </router-link>

    <ul class="flex mt-5">
      <li>
        <router-link to="/" class="ml-5">
          Movies
        </router-link>
      </li>
      <li>
        <router-link to="/favorites" class="ml-5">
          Favorites
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
