<template>
  <a
    :href="to"
    class="custom-link"
    :class="[type, external ? 'external' : '']"
    :target="[external ? '_blank' : '_self']"
  >
    <i class="icon" :class="icon" />
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

<style lang="scss">
@mixin icon($size: 14px) {
  @apply block bg-no-repeat bg-center bg-cover;
  width: $size;
  height: $size;
}

@mixin icon-src($icon) {
  background-image: url("~/assets/images/#{$icon}.svg");
}

.custom-link {
  @apply relative;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
  min-width: 0;

  .icon {
    @apply mr-2 block;
    @include icon(20px);
  }

  .dribbble {
    @include icon-src("dribbble");
  }

  .email {
    @include icon-src("email");
  }

  .github {
    @include icon-src("github");
  }

  .linkedin {
    @include icon-src("linkedin");
  }

  .download {
    @include icon-src("download");
  }

  .label {
    @apply block relative text-foreground transition-all duration-300 ease-in-out;
  }

  .label::before {
    content: "";
    @apply absolute block w-0 h-[2px] bg-accent bottom-0 left-0 transform translate-y-0.5 transition-all duration-300 ease-in-out;
  }

  :hover {
    @apply text-accent;

    // .icon {
    //   background: var(--accent);
    //   fill: var(--accent);
    // }

    &.label::before {
      @apply w-full;
    }
  }

  &.external::after {
    content: "";
    @apply absolute text-accent top-0 -right-1 transform translate-x-full translate-y-3 opacity-0 transition-all duration-300 ease-in-out;
    @include icon-src("external-link");
    @include icon(14px);
  }

  &.external:hover::after {
    @apply translate-x-full translate-y-0 opacity-100;
  }
}
</style>
