<template>
  <div class="scene">
    <h2
      id="typewriter"
      class="slide-text on-stage text-5xl md:text-7xl font-black"
    >
      {{ currentWord }}
    </h2>
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
        "The generalist designer you need",
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
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(to right, #00fffd, #207ef8, #d725ff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
  transition: all 0.5s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    display: block;
    right: 0;
    bottom: 0;
    transform: translateX(100%);
    width: 2rem;
    height: 0.5rem;
    background-color: #d725ff;
    filter: drop-shadow(0 0 4px rgba(234, 0, 255, 0.6));
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
}

.scene {
  width: 100%;
  display: block;
  position: relative;
  height: 160px;
}
</style>
