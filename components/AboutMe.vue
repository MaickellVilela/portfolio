<template>
  <Container id="aboutMeSection">
    <section class="py-16 md:py-32">
      <div class="flex gap-4 md:gap-8">
        <div class="relative w-1/2 md:w-1/4">
          <img
            class="rounded-lg w-full"
            src="@/assets/images/MaickellVilelaProfilePicture.jpg"
            alt=""
          />
          <span class="img-decorator a"></span>
          <span class="img-decorator b"></span>
          <span class="img-decorator c"></span>
        </div>
        <div class="personal-bio w-1/2 md:w-3/4">
          <h2 class="name text-4xl font-bold mb-2 md:mb-3">Maickell Vilela</h2>
          <p class="title text-accent text-sm">
            <span class="block md:inline-block mb-2 md:mb-0"
              >iOS Developer</span
            >
            <span class="hidden md:inline-block">&nbsp;|&nbsp;</span>
            <span class="block md:inline-block mb-2 md:mb-0"
              >Senior UX/UI Designer</span
            >
            <span class="hidden md:inline-block">&nbsp;|&nbsp;</span>
            <span class="block md:inline-block mb-2 md:mb-0"
              >Frontend Developer</span
            >
            <span class="hidden md:inline-block">&nbsp;|&nbsp;</span>
            <span>Design Systems specialist</span>
          </p>
          <BioText class="hidden md:block" />
        </div>
      </div>
      <BioText class="md:hidden block mt-8" />
    </section>
  </Container>
</template>

<style lang="scss">
.img-decorator {
  @apply absolute block w-8 h-[6px] md:h-2 bg-accent rounded-sm;
  filter: drop-shadow(0 0 8px theme("colors.accent" / 50%));

  &.a {
    @apply top-[15%] -left-2;
  }

  &.b {
    @apply top-[75%] -left-4;
  }

  &.c {
    @apply top-[25%] -right-2;
  }
}
</style>
