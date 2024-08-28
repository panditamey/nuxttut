<template>
  <div>
    <Navbar />
    <h1>About Us</h1>
    <p>Welcome to the About Us page.</p>
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
