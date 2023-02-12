<template>
  <section class="hero-backgorund">
    <Container class="">
      <h1 class="font-light text-2xl md:text-4xl mb-2 md:mb-4">
        Maickell Vilela
      </h1>

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
          to="mailto:maickell@me.com?subject=From website&body=Hello Maickell!"
          icon="email"
          class="mb-4"
          >Contact
        </CustomLink>
        <CustomLink
          to="https://drive.google.com/file/d/1RtXJJ-ONCKQH_YwVUFVmzuNMrrlUEzvL/view?usp=sharing"
          external
          icon="download"
          >PDF Resume Download
        </CustomLink>
      </div>
      <div class="mt-12 flex flex-col md:flex-row gap-8">
        <CustomLink to="https://dribbble.com/maickell_" external icon="dribbble"
          >Dribbble
        </CustomLink>
        <CustomLink
          to="https://www.linkedin.com/in/mvilela/"
          external
          icon="linkedin"
          >Linkedin
        </CustomLink>
        <CustomLink
          to="https://github.com/MaickellVilela"
          external
          icon="github"
          >GitHub
        </CustomLink>
      </div>
    </Container>
    <div class="scroll-indicator">
      scroll
      <div class="scroll-arrow"></div>
    </div>
  </section>
</template>

<script>
// TODO: Add Downloads Section
// TODO: Scroll indicator
</script>

<style lang="scss" scoped>
.hero-backgorund {
  // TODO: Optimize image;
  background-image: url("~/assets/images/background.png");
  @apply relative bg-cover bg-center bg-no-repeat mix-blend-screen w-full flex justify-center items-center;
  min-height: 100vh;
  min-height: -webkit-fill-available;

  .scroll-indicator {
    @apply absolute bottom-0 left-1/2 -translate-x-1/2 pb-8 md:pb-16 text-foreground text-sm text-center font-light;

    .scroll-arrow {
      background-image: url("~/assets/images/scroll-arrow.svg");
      @apply w-[50px] h-4;
    }
  }
}
</style>
