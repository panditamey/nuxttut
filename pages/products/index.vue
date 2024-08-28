<template>
  <div>
    <h1>List Of Products</h1>
    <div v-if="products.length">
      <div v-for="product in products" :key="product.id">
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <hr />
      </div>
    </div>
    <div v-else>Loading products...</div>
  </div>
</template>

<script>
import { mutations, actions, getters, state } from "~/store";
export default {
  name: "ProductsPage",
  async fetch({ store }) {
    //dispatch the vuex action to fetch products
    await store.dispatch("fetchProducts");
  },

  computed: {
    products() {
      //access the products from the vues store via the getter
      return getters.allProducts;
    },
  },
};
</script>

<style scoped></style>
