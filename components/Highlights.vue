<template>
  <Container>
    <section>
      <h3 class="text-foreground opacity-60">Highlights</h3>
      <div class="cards-grid">
        <div class="card card-style1 design-xp">
          <h4
            class="text-darkBackground font-bold text-center leading-tight italic text-[44px]"
          >
            15+<span class="text-sm -ml-1">years</span>
          </h4>
          <p class="text-darkBackground font-light text-sm text-center">
            as a UX/UI Designer
          </p>
        </div>
        <div class="card card-style2 industries"></div>
        <div class="card card-style3 projects"></div>
        <div class="card card-style2 quote1"></div>
        <div class="card card-style2 technologies"></div>
        <div class="card card-style1 front-xp"></div>
        <div class="card figma-course"></div>
        <div class="card card-style1 learning"></div>
        <div class="card card-style2 quote2"></div>
        <div class="card card-style3 design-system"></div>
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
