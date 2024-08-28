<template>
  <div>
    <h1>New Post</h1>
    <input type="text" placeholder="Title" v-model="post.title" />
    <input type="text" placeholder="Body" v-model="post.body" />
    <button @click="createPost">Submit</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },

  methods: {
    async createPost() {
      try {
        console.log(this.post);
        this.post;
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          this.post
        );
        console.log(response.data);
        alert("Post created successfully");
      } catch (err) {
        console.log(err);
        alert("Failed to create post");
      }
    },
  },
};
</script>
