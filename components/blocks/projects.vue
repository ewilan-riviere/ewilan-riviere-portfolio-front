<template>
  <section class="text-gray-700 body-font">
    <div class="container flex flex-wrap px-5 py-24 mx-auto">
      <div class="grid grid-cols-12 gap-4 mx-auto">
        <div
          v-for="(project, id) in projects"
          :key="id"
          :class="id % 3 === 0 ? 'col-span-12' : 'col-span-6'"
          class="relative flex flex-wrap w-full px-10 py-32 bg-gray-100 rounded-lg"
        >
          <img
            alt="gallery"
            class="absolute inset-0 block object-cover object-center w-full h-full opacity-25"
            :src="project.image"
          />
          <div class="relative z-10 w-full text-center">
            <h2 class="mb-2 text-2xl font-medium text-gray-900 title-font">
              {{ project.title }}
            </h2>
            <p class="leading-relaxed">
              {{ project.resume }}
            </p>
            <a class="inline-flex items-center mt-3 text-indigo-500"
              >Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  props: {
    projects: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
