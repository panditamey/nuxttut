<template>
  <div>
    <h2>Product List</h2>
    <div v-if="loading">Loading posts...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <div v-for="post in posts" :key="post.id">
        <h2>{{ post.id }}</h2>
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      loading: true,
      error: null,
    };
  },
  async created() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      console.log(response.data);
      this.posts = response.data;
    } catch (err) {
      this.error = "Failed to load posts";
    } finally {
      this.loading = false;
    }
  },
};
</script>
