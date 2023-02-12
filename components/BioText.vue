<template>
  <div class="bio text-base font-light mt-4">
    <p class="mb-2">
      I'm a UX/UI designer with over {{ UXDesignExperience }} years of
      experience in creating enterprise-level software interfaces and user
      experiences.
    </p>
    <p class="mb-2">
      My expertise includes designing for e-commerce, leading multidisciplinary
      design teams, and utilizing user-centric design based on research and data
      analysis.
    </p>
    <p class="mb-2">
      My skills include UX design, UI for mobile and desktop, design systems,
      HTML/CSS/JS, and more. I've worked extensively in the telecom and real
      estate industries and am now making a transition to UI engineering.
    </p>
  </div>
</template>

<script setup lang="ts">
const { UXDesignExperience } = yearsOfExperience();
</script>
