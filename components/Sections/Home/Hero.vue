<template>
  <section
    class="hero-backgorund w-full h-screen flex justify-center items-center"
  >
    <Container class="">
      <h1 class="font-light text-4xl mb-8">Maickell Vilela</h1>

      <SkillSlider />

      <div class="mt-8">
        <p class="text-accent text-lg font-bold">open to work</p>
        <p class="text-sm font-light">
          freelance &nbsp;&nbsp;|&nbsp;&nbsp; part-time
          &nbsp;&nbsp;|&nbsp;&nbsp; full-time
        </p>
      </div>

      <div class="downloads pt-16">
        <CustomLink
          to="https://www.behance.net/maickellvilela"
          external
          icon="dribbble"
          >Dribbble
        </CustomLink>

        <a
          href="https://drive.google.com/file/d/1x6eQ2kQXzvY8V8Wd2u0FVjKsYvZ8Vw0x/view?usp=sharing"
          target="_blank"
          class="block text-foreground font-light py-2 px-4"
        >
          Resume Download
        </a>
      </div>
    </Container>
  </section>
</template>

<script>
// TODO: Add Downloads Section
// TODO: Icons
// TODO: Scroll indicator
</script>

<style lang="scss" scoped>
.hero-backgorund {
  // TODO: Optimize image;
  background-image: url("~/assets/images/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  mix-blend-mode: screen;
}
</style>
