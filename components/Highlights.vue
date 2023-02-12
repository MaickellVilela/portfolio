<template>
  <Container>
    <section>
      <h3 class="text-foreground opacity-60">Highlights</h3>
      <div class="cards-grid">
        <div class="card card-style1 design-xp">
          <h4
            class="text-darkBackground font-extrabold text-center leading-tight italic text-[44px]"
          >
            15+
            <span class="text-sm font-bold -ml-1">years</span>
          </h4>
          <p class="text-darkBackground font-light text-sm text-center">
            as a UX/UI Designer
          </p>
        </div>
        <div class="card card-style2 industries">
          <h4 class="text-darkBackground font-extrabold italic text-xs">
            Top Industries
          </h4>
          <ol class="text-accent text-sm leading-6 list-disc ml-4">
            <li>Food Delivery</li>
            <li>Telecom</li>
            <li>Real Estate</li>
            <li>E-commerce</li>
            <li>SaaS</li>
            <li>Health Insurance</li>
            <li>Transportations</li>
          </ol>
        </div>
        <div class="card card-style3 projects">
          <h4
            class="text-accent font-extrabold text-center leading-tight italic text-[44px]"
          >
            40+
          </h4>
          <p class="text-accent font-light text-sm text-center">projects</p>
        </div>
        <div class="card card-style3 quote1"></div>
        <div class="card card-style2 technologies">
          <h4 class="text-darkBackground font-extrabold italic text-xs">
            Technologies
          </h4>
          <ol class="text-accent text-sm leading-6 list-disc ml-4">
            <li>Vue.js</li>
            <li>Tailwind CSS</li>
            <li>Nuxt</li>
            <li>Cypress</li>
            <li>Jest</li>
            <li>HTML / CSS</li>
            <li>Javascript</li>
          </ol>
        </div>
        <div class="card card-style1 front-xp">
          <h4
            class="text-darkBackground font-extrabold text-center leading-tight italic text-[44px]"
          >
            8+
            <span class="text-sm font-bold -ml-1">years</span>
          </h4>
          <p class="text-darkBackground font-light text-sm text-center">
            as a frontend dev
          </p>
        </div>
        <div class="card figma-course"></div>
        <div class="card card-style1 learning"></div>
        <div class="card card-style3 quote2"></div>
        <div class="card card-style2 design-system"></div>
        <div class="card card-style1 volunteer"></div>
      </div>
    </section>
  </Container>
</template>

<style lang="scss">
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

  .card {
    @apply rounded-lg p-2;

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
