<template>
  <div class="user-card p-4 border rounded-lg shadow-md">
    <h2 class="text-xl font-semibold">{{ user.name }}</h2>
    <p class="text-gray-600">{{ user.email }}</p>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
