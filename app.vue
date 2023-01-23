<template>
  <div>
    <Hero />
  </div>
</template>

<script>
import Hero from "~/components/Sections/Home/Hero.vue";
import Downloads from "~/components/Sections/Home/Downloads.vue";

export default {
  components: {
    Hero,
    Downloads,
  },
};
</script>

<style lang="sass">
@import "~/assets/style/main.scss"
</style>
