<template>
  <div>
    <div v-if="loading">Loading posts...</div>
    <div v-if="posts.id" class="post-details p-6">
      <h1 class="text-3xl font-bold mb-4">Post Details</h1>
      <h2 class="text-xl font-semibold mb-2">ID : {{ $route.params.id }}</h2>
      <h2 class="text-xl font-semibold mb-2">{{ posts.title }}</h2>
      <p class="text-gray-600">{{ posts.body }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: {},
      loading: true,
      error: null,
    };
  },
  async created() {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
      );
      this.posts = response.data;
    } catch (err) {
      this.error = "Failed to load posts";
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
