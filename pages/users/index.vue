<template>
  <div class="users-list p-6">
    <h1 class="text-3xl font-bold mb-4">Users</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <UserCard v-for="user in users" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<script>
import UserCard from "~/components/UserCard.vue";

export default {
  components: {
    UserCard,
  },
  data() {
    return {
      users: [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
        // Add more users as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Additional styling for the page */
</style>
