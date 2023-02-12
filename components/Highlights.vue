<template>
  <Container>
    <section class="md:pb-32 pb-16">
      <h3 class="text-foreground opacity-60">Highlights</h3>
      <div class="cards-grid">
        <div class="card card-style1 design-xp center-content">
          <div class="content">
            <h4
              class="text-darkBackground font-extrabold text-center leading-tight italic text-[44px] md:text-[52px]"
            >
              {{ UXDesignExperience }}+
              <span class="text-sm md:text-base font-bold -ml-4">years</span>
            </h4>
            <p
              class="text-darkBackground font-light text-sm md:text-base md:leading-none whitespace-nowrap text-center"
            >
              as a UX/UI Designer
            </p>
          </div>
        </div>
        <div class="card card-style2 industries">
          <div class="content">
            <h4 class="text-foreground opacity-60 font-bold italic text-sm">
              Top Industries
            </h4>
            <ol
              class="text-accent text-sm md:text-base leading-6 md:leading-7 md:mt-2 list-disc ml-5"
            >
              <li>Food Delivery</li>
              <li>Telecom</li>
              <li>Real Estate</li>
              <li>E-commerce</li>
              <li>SaaS</li>
              <li>Health Insurance</li>
              <li>Transportations</li>
            </ol>
          </div>
        </div>
        <div class="card card-style3 projects center-content">
          <div class="content">
            <h4
              class="text-accent font-extrabold text-center leading-tight italic text-[44px] md:text-[52px]"
            >
              40+
            </h4>
            <p
              class="text-accent font-light text-sm md:text-base md:leading-none whitespace-nowrap text-center"
            >
              projects
            </p>
          </div>
        </div>
        <div class="card card-style3 quote1 relative">
          <div class="content">
            <p class="text-accent serif-font italic text-base md:text-lg">
              “Continuous attention to technical excellence and good design
              enhances agility.”
            </p>
            <span
              class="absolute bottom-1 right-1 text-xs text-accent font-light opacity-60"
              >Principles behind the Agile Manifesto</span
            >
          </div>
        </div>
        <div class="card card-style2 technologies">
          <div class="content">
            <h4 class="text-foreground opacity-60 font-bold italic text-sm">
              Technologies
            </h4>
            <ol
              class="text-accent text-sm md:text-base leading-6 md:leading-7 md:mt-2 list-disc ml-5"
            >
              <li>Vue.js</li>
              <li>Tailwind CSS</li>
              <li>Nuxt</li>
              <li>Cypress</li>
              <li>Jest</li>
              <li>HTML / CSS</li>
              <li>Javascript</li>
            </ol>
          </div>
        </div>
        <div class="card card-style1 front-xp center-content">
          <div class="content">
            <h4
              class="text-darkBackground font-extrabold text-center leading-tight italic text-[44px] md:text-[52px]"
            >
              {{ FrontendDevExperience }}+
              <span class="text-sm md:text-base font-bold -ml-4">years</span>
            </h4>
            <p
              class="text-darkBackground font-light text-sm md:text-base md:leading-none whitespace-nowrap text-center"
            >
              as a frontend dev
            </p>
          </div>
        </div>
        <div class="card figma-course relative">
          <div class="overlay"></div>
          <h4
            class="absolute bottom-2 left-2 right-2 text-foreground text-base font-semibold italic"
          >
            Lectured a Figma Course
          </h4>
        </div>
        <div class="card card-style1 learning center-content">
          <div class="content">
            <h4 class="text-darkBackground font-bold text-sm md:text-base">
              Always Learning
            </h4>
            <p class="text-darkBackground text-xs md:text-sm">
              Practicing Blender 3D <br />
              Learning iOS Dev. <br />
              Reading Philosophy
            </p>
          </div>
        </div>
        <div class="card card-style3 quote2 relative">
          <div class="content">
            <p
              class="text-accent serif-font italic text-base md:text-lg leading-snug"
            >
              “Our highest priority is to satisfy the customer through early and
              continuous delivery of valuable software.”
            </p>
            <span
              class="absolute bottom-1 right-1 text-xs text-accent font-light opacity-60"
              >Principles behind the Agile Manifesto</span
            >
          </div>
        </div>
        <div class="card card-style2 design-system center-content">
          <div class="content">
            <h4 class="text-accent font-bold text-sm md:text-base">
              Design System
            </h4>
            <p class="text-accent text-xs md:text-sm">
              specialist. 10+ design systems built from scratch
            </p>
          </div>
        </div>
        <div class="card card-style1 volunteer center-content">
          <div class="content">
            <h4 class="text-darkBackground font-bold text-sm md:text-base">
              Volunteer Work
            </h4>
            <p class="text-darkBackground text-xs md:text-sm">
              Mentoring for startups and students
            </p>
          </div>
        </div>
      </div>
    </section>
  </Container>
</template>

<script setup lang="ts">
const { UXDesignExperience, FrontendDevExperience } = yearsOfExperience();
</script>

<style lang="scss">
.serif-font {
  font-family: "Times New Roman", Times, serif;
}

.overlay {
  // @apply absolute inset-0 bg-gradient-to-b to-darkBackground;
  @apply absolute inset-0;
  background: linear-gradient(
    0deg,
    rgba(5, 14, 28, 0.85) 14.58%,
    rgba(5, 14, 28, 0.842873) 17.87%,
    rgba(5, 14, 28, 0.822447) 20.55%,
    rgba(5, 14, 28, 0.79016) 22.71%,
    rgba(5, 14, 28, 0.747446) 24.45%,
    rgba(5, 14, 28, 0.695741) 25.85%,
    rgba(5, 14, 28, 0.63648) 27.02%,
    rgba(5, 14, 28, 0.571099) 28.05%,
    rgba(5, 14, 28, 0.501034) 29.03%,
    rgba(5, 14, 28, 0.42772) 30.06%,
    rgba(5, 14, 28, 0.352593) 31.23%,
    rgba(5, 14, 28, 0.277087) 32.64%,
    rgba(5, 14, 28, 0.20264) 34.37%,
    rgba(5, 14, 28, 0.130686) 36.53%,
    rgba(5, 14, 28, 0.0626607) 39.21%,
    rgba(5, 14, 28, 0) 42.5%
  );
  transform: matrix(-1, 0, 0, 1, 0, 0);
}

.cards-grid {
  @apply grid gap-4;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-template-areas:
    "design-xp industries"
    "projects industries"
    "quote1 quote1"
    "technologies front-xp"
    "technologies figma-course"
    "learning figma-course"
    "quote2 quote2"
    "design-system volunteer";
  grid-gap: 1rem;
  margin-top: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      "design-xp industries quote1 quote1"
      "projects industries front-xp technologies"
      "quote2 quote2 figma-course technologies"
      "volunteer design-system figma-course learning";
  }

  .card {
    @apply rounded-lg p-2 md:p-4;

    &.center-content {
      @apply flex justify-center items-center;
    }

    &.card-style1 {
      @apply bg-accent;
    }

    &.card-style2 {
      background-color: theme("colors.foreground" / 10%);
    }

    &.card-style3 {
      @apply border border-accent;
    }

    &.design-xp {
      grid-area: design-xp;
    }

    &.industries {
      grid-area: industries;
    }

    &.projects {
      grid-area: projects;
    }

    &.quote1 {
      grid-area: quote1;
    }

    &.technologies {
      grid-area: technologies;
    }

    &.front-xp {
      grid-area: front-xp;
    }

    &.figma-course {
      grid-area: figma-course;
      background-image: url("~/assets/images/FigmaCourse.jpg");
      @apply w-full bg-cover bg-top bg-no-repeat;
    }

    &.learning {
      grid-area: learning;
    }

    &.quote2 {
      grid-area: quote2;
    }

    &.design-system {
      grid-area: design-system;
    }

    &.volunteer {
      grid-area: volunteer;
    }
  }
}
</style>
