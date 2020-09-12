<template>
  <span
    :class="[{ 'svg-baseline': baseline }, `icon-${name}`]"
    class="svg-icon"
  >
    <client-only>
      <!-- eslint-disable vue/require-component-is -->
      <component
        :is="`icon-${name}`"
        :width="size ? size : width"
        :height="size ? size : height"
        :class="variant"
        class="fill-current"
      />
      <span v-if="badge" class="badge" v-text="badge" />
    </client-only>
  </span>
</template>

<script>
export default {
  name: 'IconBase',
  props: {
    name: {
      type: String,
      required: true,
      default: '',
    },
    baseline: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
    variant: {
      type: String,
      default: 'default',
    },
    badge: {
      type: [String, Number],
      default: '',
    },
    size: {
      type: [String, Number],
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.svg-icon {
  position: relative;
  display: inline-flex;
  align-self: center;

  &.svg-baseline svg {
    top: 0.125em;
    position: relative;
  }
}

.badge {
  font-size: 0.7rem;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
}
</style>
