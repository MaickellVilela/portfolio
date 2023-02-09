<template>
  <a
    :href="to"
    :target="targetValue"
    class="custom-link"
    :class="[type, external ? 'external' : '']"
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
  computed: {
    targetValue() {
      return this.external ? "_blank" : "_self";
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
  @apply relative flex items-center justify-start min-w-0 w-fit;

  .icon {
    @apply mr-2 block transition-all duration-300 ease-in-out;
    @include icon(20px);
  }

  $icons: (dribbble, email, github, linkedin, download);

  @each $icon in $icons {
    .#{$icon} {
      @include icon-src($icon);
    }
  }

  .label {
    @apply block relative text-foreground transition-all duration-300 ease-in-out;
  }

  .label::before {
    content: "";
    @apply absolute block w-0 h-[2px] bg-accent bottom-0 left-0 transform translate-y-0.5 transition-all duration-300 ease-in-out;
  }

  &:hover {
    .icon {
      filter: invert(0.5) sepia(1) saturate(300%) hue-rotate(52deg)
        brightness(150%);
    }

    .label {
      @apply text-accent;
      &::before {
        @apply w-full;
      }
    }
  }

  &.external::after {
    content: "";
    @apply absolute text-accent top-0 -right-1 transform translate-x-full translate-y-3 opacity-0 transition-all duration-300 ease-in-out;
    @include icon-src("external-link");
    @include icon(14px);
  }

  &.external:hover::after {
    @apply translate-x-full -translate-y-1 opacity-30;
    filter: saturate(0);
  }
}
</style>
