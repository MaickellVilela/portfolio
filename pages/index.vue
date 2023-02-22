<template>
  <main>
    <Hero />
    <AboutMe />
    <HighlightsV2 />

    <div class="box-container mx-auto mt-32">
      <div class="my-box" ref="boxRef">
        <p>Device orientation:</p>
        <p>x: {{ x }}</p>
        <p>y: {{ y }}</p>
        <p>z: {{ z }}</p>
      </div>
    </div>

    <div class="h-32"></div>
  </main>
</template>

<script setup lang="ts">
const boxRef = ref(null);

const maxRotation = 15;

let x = ref(0);
let y = ref(0);
let z = ref(0);

const updateXYZ = (event: DeviceOrientationEvent) => {
  x.value = event.alpha!;
  y.value = event.beta!;
  z.value = event.gamma!;

  console.log(`x: ${x.value}, y: ${y.value}, z: ${z.value}`);
};

// function to get the mouse position relative to the box
const getMousePos = (e) => {
  const rect = boxRef.value.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  return { x, y };
};

//function to set the mouse position to the x any y css variables
const setMousePos = (e) => {
  const { x, y } = getMousePos(e);

  boxRef.value.style.setProperty("--x", `${x}px`);
  boxRef.value.style.setProperty("--y", `${y}px`);
};

const percentage = (value, total) => {
  return (value / total) * 100;
};

function mapValueToRange(value) {
  const scaledValue = (value - 50) / 50;
  return scaledValue;
}

const setSheenPos = (e) => {
  const { x, y } = getMousePos(e);

  const rect = boxRef.value.getBoundingClientRect();
  const xPerc = percentage(x, rect.width);
  const yPerc = percentage(y, rect.height);

  const xRotation = maxRotation * mapValueToRange(xPerc);
  const yRotation = maxRotation * mapValueToRange(yPerc);

  boxRef.value.style.setProperty("--sheenX", `${xRotation}deg`);
  boxRef.value.style.setProperty("--sheenY", `${yRotation}deg`);
};

const initSheen = () => {
  boxRef.value.style.setProperty("--sheenX", `0deg`);
  boxRef.value.style.setProperty("--sheenY", `0deg`);
};

function lerp(a, b, t) {
  return a * (1 - t) + b * t;
}

// get the current sheen values a tween to zero
const resetSheen = () => {
  const sheenX = boxRef.value.style.getPropertyValue("--sheenX");
  const sheenY = boxRef.value.style.getPropertyValue("--sheenY");

  const x = parseFloat(sheenX);
  const y = parseFloat(sheenY);

  const startTime = performance.now();
  const duration = 200; // 500ms

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const newX = lerp(x, 0, progress);
    const newY = lerp(y, 0, progress);

    boxRef.value.style.setProperty("--sheenX", `${newX}deg`);
    boxRef.value.style.setProperty("--sheenY", `${newY}deg`);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

// function to handdle the mouse move event
const handleMouseMove = () => {
  boxRef.value.addEventListener("mousemove", setMousePos);
  boxRef.value.addEventListener("mousemove", setSheenPos);
  console.log("mouse enter");
};

// handdle mouse enter event
const handleMouseEnter = () => {
  boxRef.value.addEventListener("mouseenter", handleMouseMove);
};

// handdle mouse leave event
const handleMouseLeave = () => {
  boxRef.value.addEventListener("mouseleave", () => {
    boxRef.value.removeEventListener("mousemove", setMousePos);
    boxRef.value.removeEventListener("mousemove", setSheenPos);

    resetSheen();
  });
};

onMounted(() => {
  initSheen();
  handleMouseEnter();
  handleMouseLeave();
});
</script>

<style scoped>
.box-container {
  width: 300px;
  height: 300px;

  margin-bottom: 300px;

  perspective: 800px;
  transform-style: preserve-3d;

  /* transition: transform 0.3s; */
}

.my-box {
  --box-color: rgba(2, 22, 2, 0);
  --light-color: rgba(184, 255, 4, 6);

  --x: 0;
  --y: 0;

  --sheenX: 10deg;
  --sheenY: 10deg;

  @apply absolute inset-0 p-8 rounded-lg;
  backface-visibility: hidden;

  border: 1px solid #fff;
  text-align: center;

  background: radial-gradient(
    circle at var(--x) var(--y),
    var(--light-color),
    var(--box-color)
  );

  background-repeat: no-repeat;

  transform: rotateY(calc(var(--sheenY))) rotateX(calc(var(--sheenX)));

  transition: background-color 1s ease-in-out;
  &:hover {
    /* In CSS, you can't transition a background gradient. 
    It jumps from one gradient to the other immediately, 
    with no smooth transition between the two. He documents 
    a clever tactic of positioning a pseudo element covering 
    the element with a different background and transitioning 
    the opacity of that pseudo element. */
  }
}
</style>
