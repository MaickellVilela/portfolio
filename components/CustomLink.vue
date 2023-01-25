<template>
  <a
    :href="to"
    class="custom-link"
    :class="type"
    :target="[external ? '_blank' : '_self']"
  >
    <i class="icon" :class="icon"></i>
    <span class=""><slot></slot></span>
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
  color: red;
  @apply relative;

  ::after {
    content: "";
    @apply absolute block w-[14px] h-[14px] text-accent top-0 -right-1 transform translate-x-full translate-y-3;

    background-image: url("~/assets/images/external-link.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }
  :hover {
    &::after {
      opacity: 1;
      @apply translate-x-full translate-y-0;
    }
  }
}
</style>
