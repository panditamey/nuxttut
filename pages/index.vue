<template>
  <div>
    <Navbar />
    <h1>Home Page</h1>
    <p>Welcome to our website.</p>
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
