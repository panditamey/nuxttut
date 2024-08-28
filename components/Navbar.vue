<template>
  <nav>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/about">About Us</nuxt-link>
    <nuxt-link to="/posts">Posts</nuxt-link>
    <nuxt-link to="/products">Products</nuxt-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
nav {
  display: flex;
  gap: 20px;
}
</style>
