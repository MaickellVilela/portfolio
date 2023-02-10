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

        <!-- href="https://drive.google.com/file/d/1x6eQ2kQXzvY8V8Wd2u0FVjKsYvZ8Vw0x/view?usp=sharing" -->
      </div>
      <div class="mt-12 flex gap-8">
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
