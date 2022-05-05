<template>
  <div class="container">
    <main>
      <div class="py-5 text-center">
        <h2>Error</h2>
        <p class="lead">Could not process payment!</p>
      </div>
    </main>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
  mounted() {
    console.log(this.$route.params.code);
  },
});
</script>
