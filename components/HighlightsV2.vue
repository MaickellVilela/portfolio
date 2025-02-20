<template>
  <Container>

    <section class="ios-section md:pb-32 pb-16 md:flex gap-4 md:gap-8 md:flex-row-reverse">
      <div class="cards-grid basis-1/2">

        <!-- App Logo -->
        <div class="card card-style2 app-logo center-content">
          <div class="content flex flex-col gap-6">

            <div class="logo-container">
              <img
                src="@/assets/images/WRKTS-icon.png"
                alt="WRKTS Logo"
                class="h-fill w-1/2 mx-auto mb-2 rounded-xl"
              />
              <p
                class="font-semibold text-sm md:text-base md:leading-none whitespace-nowrap text-center"
              >
                WRKTS
              </p>
            </div>

            <a href="https://testflight.apple.com/join/UWJGs44s">
              <img src="@/assets/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="App Store" class="w-full mx-auto mb-2" />
            </a>

            <hr class="opacity-30">

            <a
              href="#page"
              class="text-accent block font-semibold text-sm md:text-base md:leading-none whitespace-nowrap text-center"
            >
              Know more
            </a>
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
              <li>Swift</li>
              <li>SwiftUI</li>
              <li>SwiftData</li>
              <li>HealthKit</li>
              <li>WorkoutKit</li>
              <li>CloudKit</li>
              <li>SwiftTest</li>
              <li>XCTest</li>
              <li>UITest</li>
            </ol>
          </div>
        </div>

      </div>
      <div class="copy-container basis-1/2 mt-8 md:mt-0">
        <h3 class="text-2xl font-bold mb-4 md:mb-6">
          iOS App Development
        </h3>
        <div class="">
          <p class="mb-2">
                WRKTS is a native iOS app that lets users create, customize, and manage Apple Watch 
                workouts directly from their iPhone. It supports structured training with goals like 
                time, distance, calories, and target pace, plus advanced interval workouts with 
                seamless transitions between work and recovery phases.
          </p>
          <p class="mb-2">
                Users can design swimming workouts, duplicate and modify templates, preview workouts, 
                and organize their training library. Future updates will bring smart scheduling, 
                AI-powered workout planning, and progress tracking—making WRKTS the ultimate 
                Apple Watch workout companion.
          </p>
        </div>
      </div>
    </section>

    <section class="design-section md:pb-32 pb-16 md:flex gap-4 md:gap-8">
      <div class="cards-grid basis-1/2">
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
      </div>
      <div class="copy-container basis-1/2 mt-8 md:mt-0">
        <h3 class="text-2xl font-bold mb-4 md:mb-6">
          Product Design Expertise
        </h3>
        <div class="">
          <p class="mb-4 leading-6">
            I have a proven track record of delivering innovative and effective
            products. With a career spanning 15 years, I've honed my skills in
            creating user-centric software interfaces and experiences.
          </p>
          <p class="">
            With more than 40 successful projects under my belt, showcasing my
            expertise in UX design and my ability to deliver exceptional
            results.
          </p>
        </div>
      </div>
    </section>

    <section
      class="figma-section md:pb-32 pb-16 md:flex md:flex-row-reverse gap-4 md:gap-8"
    >
      <div class="cards-grid basis-1/2">
        <div class="card card-style1 figma-xp center-content">
          <div class="content">
            <h4
              class="text-darkBackground font-extrabold text-center leading-tight italic text-[44px] md:text-[52px]"
            >
              {{ FigmaExperience }}+
              <span class="text-sm md:text-base font-bold -ml-4">years</span>
            </h4>
            <p
              class="text-darkBackground font-light text-sm md:text-base md:leading-none whitespace-nowrap text-center"
            >
              using Figma
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
        <div class="card card-style2 design-system center-content">
          <div class="content">
            <h4 class="text-accent font-bold text-sm md:text-base">
              Design System Specialist
            </h4>
            <p class="text-accent text-xs md:text-sm">
              10+ design systems built from scratch
            </p>
          </div>
        </div>
      </div>
      <div class="copy-container basis-1/2 mt-8 md:mt-0">
        <h3 class="text-2xl font-bold mb-4 md:mb-6">Figma Mastery</h3>
        <div class="">
          <p class="mb-4 leading-6">
            With extensive expertise in Figma, I bring a wealth of knowledge to
            the design process. My mastery of the software has led to the
            creation of multiple design systems, resulting in streamlined
            workflows and a consistently high level of design quality.
          </p>
          <p class="">
            My expertise has earned me recognition, including an invitation to
            record a course on Figma basics.
          </p>
        </div>
      </div>
    </section>

    <section class="code-section md:pb-32 pb-16 md:flex gap-4 md:gap-8">
      <div class="cards-grid basis-1/2">
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
        <div class="card card-style2 tech-logos center-content">
          <div class="content">
            <img
              src="@/assets/images/tech-logos.svg"
              alt="Vue.js, Tailwind CSS, Nuxt, Cypress, Jest, HTML, CSS, Javascript"
              class="h-fit w-fit"
            />
          </div>
        </div>
      </div>
      <div class="copy-container basis-1/2 mt-8 md:mt-0">
        <h3 class="text-2xl font-bold mb-4 md:mb-6">
          Designer with coding skills
        </h3>
        <div class="">
          <p class="mb-4 leading-6">
            I bring a unique blend of design and development skills to the
            table. My expertise in Vue.js, Tailwind CSS, Nuxt, and other key
            technologies allows me to create seamless and engaging user
            experiences.
          </p>
          <p class="">
            My drive to continuously learn and improve has led me to expand my
            knowledge in coding, enabling me to bridge the gap between design
            and development.
          </p>
        </div>
      </div>
    </section>

    <section
      class="agile-section md:pb-32 pb-16 md:flex md:flex-row-reverse gap-4 md:gap-8"
    >
      <div class="cards-grid basis-1/2">
        <div class="card card-style2 design-system center-content">
          <div class="content">
            <h4
              class="text-accent mb-2 font-bold text-base md:text-xl leading-5 md:leading-6"
            >
              Agile Design
            </h4>
            <p class="text-accent text-xs md:text-sm">
              I facilitated several agile workshops and training sessions
            </p>
          </div>
        </div>
        <div class="card card-style1 continuous center-content">
          <div class="content">
            <h4
              class="text-darkBackground mb-2 font-bold text-base md:text-xl leading-5 md:leading-6"
            >
              Continuous Delivery
            </h4>
            <p class="text-darkBackground text-xs md:text-sm">
              small iterations deliver best results
            </p>
          </div>
        </div>
        <div class="card card-style3 quote1 relative">
          <div class="content">
            <p class="text-accent serif-font italic text-lg md:text-xl">
              “Continuous attention to technical excellence and good design
              enhances agility.”
            </p>
            <span
              class="absolute bottom-1 right-1 text-xs text-accent font-light opacity-60"
              >Principles behind the Agile Manifesto</span
            >
          </div>
        </div>
      </div>
      <div class="copy-container basis-1/2 mt-8 md:mt-0">
        <h3 class="text-2xl font-bold mb-4 md:mb-6">Agile Advocate</h3>
        <div class="">
          <p class="mb-4 leading-6">
            As an Agile Advocate, I live by the principles of continuous
            attention to technical excellence and good design, and prioritize
            customer satisfaction through early and frequent delivery of
            valuable software.
          </p>
          <p class="">
            My passion for Agile design and development drives my commitment to
            delivering high-quality and efficient solutions that meet the
            evolving needs of my clients.
          </p>
        </div>
      </div>
    </section>
  </Container>
</template>

<script setup lang="ts">
const { UXDesignExperience, FrontendDevExperience, FigmaExperience } =
  yearsOfExperience();
</script>

<style lang="scss">
.design-section {
  .cards-grid {
    grid-template-areas:
      "design-xp industries"
      "projects industries";

    .card {
      &.design-xp {
        grid-area: design-xp;
      }

      &.industries {
        grid-area: industries;
      }

      &.projects {
        grid-area: projects;
      }
    }
  }
}

.figma-section {
  .cards-grid {
    grid-template-areas:
      "figma-xp figma-course"
      "design-system figma-course";

    .card {
      &.figma-xp {
        grid-area: figma-xp;
      }

      &.design-system {
        grid-area: design-system;
      }

      &.figma-course {
        grid-area: figma-course;
        background-image: url("~/assets/images/FigmaCourse.jpg");
        @apply w-full bg-cover bg-top bg-no-repeat;

        .overlay {
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
      }
    }
  }
}

.code-section {
  .cards-grid {
    grid-template-areas:
      "front-xp technologies"
      "tech-logos technologies";

    .card {
      &.front-xp {
        grid-area: front-xp;
      }

      &.technologies {
        grid-area: technologies;
      }

      &.tech-logos {
        @apply p-4;
        grid-area: tech-logos;
      }
    }
  }
}

.ios-section {
  .cards-grid {
    grid-template-areas:
      "app-logo technologies"
      "app-logo technologies";
  }

  .card {
    &.app-logo {
      grid-area: app-logo;
    }

    &.technologies {
      grid-area: technologies;
    }
  }
}

.agile-section {
  .cards-grid {
    grid-template-areas:
      "agile continuous"
      "quote1 quote1";

    .card {
      &.agile {
        grid-area: agile;
      }

      &.continuous {
        grid-area: continuous;
      }

      &.quote1 {
        grid-area: quote1;

        .serif-font {
          font-family: "Times New Roman", Times, serif;
        }
      }
    }
  }
}

.cards-grid {
  @apply grid gap-4;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;

  @media (min-width: 768px) {
    grid-gap: 2rem;
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
  }
}
</style>
