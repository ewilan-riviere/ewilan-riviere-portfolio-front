<template>
  <div>
    <div
      class="relative w-40 h-40 p-10 border-8 border-black rounded-full font-morpheus"
      style="font-size: 5.5rem"
    >
      <div class="absolute" style="top: 0.2rem; left: 0.25rem">
        <span class="flip_H">E</span><span>R</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioLogo',
}
</script>

<style lang="scss" scoped>
span {
  display: inline-block;
}
.flip_H {
  transform: scale(-1, 1);
}
.flip_V {
  transform: scale(1, -1);
}
</style>
