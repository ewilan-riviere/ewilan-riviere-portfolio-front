<template>
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20">
        <div class="w-full mb-6 lg:w-1/2 lg:mb-0">
          <h1
            class="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font"
          >
            Mes projets
          </h1>
          <div class="w-20 h-1 bg-indigo-500 rounded" />
        </div>
        <p class="w-full text-base leading-relaxed lg:w-1/2">
          Qu'ils soient personnels, réalisés seule ou en équipe, ou bien
          professionnels, voici une sélection de mes projets.
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div
          v-for="project in projects"
          :key="project.id"
          class="p-4 xl:w-1/4 md:w-1/2"
        >
          <div class="bg-gray-200 rounded-lg">
            <img
              class="object-cover object-center w-full h-40 mb-6 rounded"
              :src="project.image"
              alt="content"
            />
            <div class="p-6">
              <h3
                class="text-xs font-medium tracking-widest text-indigo-500 title-font"
              >
                GitHub
              </h3>
              <h2 class="mb-4 text-lg font-medium text-gray-900 title-font">
                {{ project.title }}
              </h2>
              <p class="text-base leading-relaxed">
                {{ project.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsAlt',
  props: {
    projects: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
