<script lang="ts">
// const { data } = await useFetch(
//   `http://localhost:8000/api/checkout/links/${route.params.code}`
// );
interface CheckoutResponse {
  user: { first_name: string; last_name: string };
}
export default defineComponent({
  async asyncData({ params, $http }) {
    const post = await $http.$get(
      `http://localhost:8000/api/checkout/links/${params.code}`
    );
    return { post };
  },
  async setup() {
    // const route = useRoute();
    // const data = await this.asyncData()
    //   console.log("setup");
    //   console.log(data.value);
    // },
    // async mounted() {
    //   console.log(this.$route.params.code);
    //   // const { data } = await this.$axios.get(`http://localhost:8000/api/checkout/links/${this.$route.params.code}`);
    //   // const { data, pending, refresh } = await useLazyFetch(
    //   //   `http://localhost:8000/api/checkout/links/${this.$route.params.code}`
    //   // );
    //   // watch(data, (newPosts) => {
    //   //   console.log(newPosts);
    //   //   // Because posts starts out null, you won't have access
    //   //   // to its contents immediately, but you can watch it.
    //   // });
    //   const { data } = await useFetch(
    //     `http://localhost:8000/api/checkout/links/${this.$route.params.code}`
    //   );
    //   console.log(data);
  },
});
</script>
<script setup lang="ts">
const config = useRuntimeConfig();
const route = useRoute();
// const { data } = await useFetch(
//   `http://localhost:8000/api/checkout/links/${route.params.code}`
// );

// useLazyAsyncData allow you to execute the fetch in the backend before return the code to the frontend. That is more optimal for SEO
const { data }: any = await useLazyAsyncData("data", () =>
  $fetch(`${config.BASE_URL}/checkout/links/${route.params.code}`)
);
</script>

<template>
  <div class="container">
    <main>
      <div class="py-5 text-center">
        <h2>Welcome</h2>
        <p class="lead">
          {{ data.user.first_name }} {{ data.user.last_name }} has invited you
          to buy this products!
        </p>
      </div>
      {{ data }}

      <div class="row g-5">
        <div class="col-md-5 col-lg-4 order-md-last">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-primary">Products</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 class="my-0">Product name</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$12</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>
        </div>
        <div class="col-md-7 col-lg-8">
          <h4 class="mb-3">Personal Info</h4>
          <form class="needs-validation" novalidate>
            <div class="row g-3">
              <div class="col-sm-6">
                <label for="firstName" class="form-label">First name</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder="First name"
                  required
                />
              </div>

              <div class="col-sm-6">
                <label for="lastName" class="form-label">Last name</label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder="Last name"
                  required
                />
              </div>

              <div class="col-12">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
              </div>

              <div class="col-12">
                <label for="address" class="form-label">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required
                />
              </div>

              <div class="col-md-5">
                <label for="country" class="form-label">Country</label>
                <input
                  type="text"
                  class="form-control"
                  id="country"
                  placeholder="Country"
                  required
                />
              </div>

              <div class="col-md-4">
                <label for="city" class="form-label">City</label>
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  placeholder="City"
                  required
                />
              </div>

              <div class="col-md-3">
                <label for="zip" class="form-label">Zip</label>
                <input
                  type="text"
                  class="form-control"
                  id="zip"
                  placeholder="Zip"
                  required
                />
              </div>
            </div>

            <hr class="my-4" />

            <button class="w-100 btn btn-primary btn-lg" type="submit">
              Checkout
            </button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>
