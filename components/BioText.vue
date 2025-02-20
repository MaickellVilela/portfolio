<template>
  <div class="bio text-base font-light mt-4">
    <p class="mb-2">
      I'm an iOS developer and frontend engineer, currently building WRKTS — an iOS app designed to be a 
      companion for Apple Watch's Workouts app. I work with Swift, SwiftUI, SwiftData, HealthKit,
      WorkoutKit, and CloudKit to create seamless mobile experiences in Apple's ecosystem.
    </p>
    <p class="mb-2">
      With over {{ UXDesignExperience }} years of experience in UX/UI design and frontend
      development, I specialize in crafting enterprise-level software interfaces that are
      intuitive, accessible, and performance-optimized.
    </p>
    <p class="mb-2">
      My skill set includes iOS engineering with Swift, UI/UX for mobile and desktop software,
      design systems, and frontend technologies like HTML, CSS, JavaScript, Vue.js,
      and Nuxt.js. I bridge design and development to deliver high-quality digital experiences.
    </p>
  </div>
</template>

<script setup lang="ts">
const { UXDesignExperience } = yearsOfExperience();
</script>
