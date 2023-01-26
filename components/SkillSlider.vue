<template>
  <div class="scene">
    <h2 id="typewriter" class="slide-text text-5xl md:text-7xl font-black">
      {{ currentWord }}
    </h2>
    <span class="cursor"></span>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      words: [
        "Product Designer",
        "UX Designer",
        "CSS Specialist",
        "UI Engineer",
        "Design System Manager",
      ], // array of words to be typed
      delay: 3000, // delay in milliseconds before the next word is typed
      delayByLetter: 100, // delay in milliseconds before the next letter is typed
      currentWord: "", // current word being typed
      currentIndex: 0, // current index of the word array
      currentLetter: 0, // current letter of the current word
    };
  },
  methods: {
    typeWriter() {
      if (this.currentLetter < this.words[this.currentIndex].length) {
        this.currentWord += this.words[this.currentIndex][this.currentLetter];
        setTimeout(() => this.typeWriter(), this.delayByLetter);
        this.currentLetter++;
      } else {
        setTimeout(() => {
          this.currentWord = "";
          this.currentLetter = 0;
          this.currentIndex = (this.currentIndex + 1) % this.words.length;
          this.typeWriter();
        }, this.delay);
      }
    },
  },
  mounted() {
    this.typeWriter();
  },
};
</script>

<style lang="scss" scoped>
.slide-text {
  @apply text-foreground whitespace-nowrap inline relative;
  transition: all 0.5s ease-in-out;

  &::before {
    content: "";
    @apply absolute block w-screen h-full -left-8 top-0 transform -translate-x-full bg-accent rounded-lg;
    filter: drop-shadow(0 0 32px rgba(#99ff17, 0.6));
  }
}

.cursor {
  @apply inline-block transform translate-y-full w-8 h-2 bg-accent rounded-sm;
  filter: drop-shadow(0 0 8px rgba(#99ff17, 0.6));
  animation: blink 0.6s infinite;
  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}

.scene {
  @apply w-full block relative;
}
</style>
