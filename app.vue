<template>
  <NuxtPage />
</template>
<script>
export default {
  head() {
    return {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
          integrity:
            "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",
          crossorigin: "anonymous",
        },
      ],
    };
  },
};
</script>
