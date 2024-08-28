import axiosFakestore from "~/plugins/axios-fakestore";

export const state = () => ({
  products: [],
});

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
};

export const getters = {
  allProducts: (state) => state.products,
};

export const actions = {
  async fetchProducts({ commit }) {
    const products = await axiosFakestore.get("/");
    commit("setProducts", products);
  },
};
