<template>
  <h2 id="typewriter" class="slide-text">
    {{ currentWord }}<span class="cursor"></span>
  </h2>
</template>

<script>
export default {
  data: function () {
    return {
      words: [
        "iOS Developer",
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
  @apply block text-foreground whitespace-normal md:whitespace-nowrap relative h-[72px] md:h-auto text-4xl md:text-7xl font-black;
  transition: all 0.5s ease-in-out;

  &::before {
    content: "";
    @apply absolute block w-screen h-1 md:h-2 md:-left-8 top-1/2 transform -translate-x-full -translate-y-1/2 bg-accent rounded-sm;
    filter: drop-shadow(0 0 8px theme("colors.accent" / 50%));
  }
}

.cursor {
  @apply inline-block transform translate-y-full w-4 h-1 md:w-8 md:h-2 bg-accent rounded-sm;
  filter: drop-shadow(0 0 8px theme("colors.accent" / 50%));
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
</style>
