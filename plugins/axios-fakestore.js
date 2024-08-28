export default function ({ $axios }, inject) {
  const fakeStoreapi = $axios.create({
    baseUrl: "https://fakestoreapi.com/products",
  });

  inject("fakeStoreapi", fakeStoreapi);
}
