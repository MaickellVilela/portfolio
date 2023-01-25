<template>
  <a
    :href="to"
    class="custom-link"
    :class="[type, external ? 'external' : '']"
    :target="[external ? '_blank' : '_self']"
  >
    <i class="icon" :class="icon"></i>
    <span class="label"><slot></slot></span>
  </a>
</template>

<script>
export default {
  name: "CustomLink",
  props: {
    icon: {
      type: String,
    },
    to: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "primary",
    },
    external: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-link {
  @apply relative;

  .label {
    @apply text-foreground transition-all duration-300 ease-in-out;
  }

  .label::before {
    content: "";
    @apply absolute block w-0 h-[2px] bg-accent bottom-0 left-0 transform translate-y-1 transition-all duration-300 ease-in-out;
  }

  :hover {
    @apply text-accent;

    &.label::before {
      @apply w-full;
    }
  }

  &.external::after {
    content: "";
    @apply absolute block w-[14px] h-[14px] text-accent top-0 -right-1 transform translate-x-full translate-y-3 opacity-0 transition-all duration-300 ease-in-out;

    background-image: url("~/assets/images/external-link.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  &.external:hover::after {
    @apply translate-x-full translate-y-0 opacity-100;
  }
}
</style>
