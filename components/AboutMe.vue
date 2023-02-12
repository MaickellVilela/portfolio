<template>
  <Container>
    <section class="py-16 md:py-32">
      <div class="flex gap-4 md:gap-8">
        <img
          class="rounded-lg w-1/2 md:w-1/4"
          src="@/assets/images/Maickell Vilela Profile Picture.jpg"
          alt=""
        />
        <div class="personal-bio">
          <h2 class="name text-4xl font-bold mb-2 md:mb-3">Maickell Vilela</h2>
          <p class="title text-accent text-sm">
            <span>Senior UX/UI Designer</span>
            <span class="hidden md:inline-block">&nbsp;|&nbsp;</span>
            <span>Frontend Developer</span>
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
