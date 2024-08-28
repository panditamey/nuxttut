<template>
  <div class="posts-list p-6">
    <h1 class="text-3xl font-bold mb-6">Posts</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="post in posts"
        :key="post.id"
        class="post-card p-4 border rounded-lg shadow-md"
      >
        <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
        <p class="text-gray-600">{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [], // Initialize posts as an empty array
    };
  },
  async asyncData() {
    try {
      const { data: posts } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log("Posts:", posts);
      return { posts };
    } catch (error) {
      console.error("Error fetching posts:", error);
      return { posts: [] };
    }
  },
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
