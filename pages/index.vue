<template>
  <div>
    <!-- <intro-logo /> -->
    <!-- <introduction :texts="texts" :socials="socials"></introduction> -->
    <hero></hero>
    <features></features>
    <formations></formations>
    <projects></projects>
    <projects-alt></projects-alt>
    <skills></skills>
    <!-- <contact></contact> -->
    <v-footer></v-footer>
  </div>
</template>

<script>
// import introLogo from '~/components/intro-logo.vue'
import hero from '@/components/blocks/hero'
import contact from '@/components/blocks/contact'
import features from '@/components/blocks/features'
import formations from '@/components/blocks/formations'
import projects from '@/components/blocks/projects'
import projectsAlt from '@/components/blocks/projects-alt'
import skills from '@/components/blocks/skills'

export default {
  components: {
    // introLogo,
    hero,
    // eslint-disable-next-line vue/no-unused-components
    contact,
    features,
    formations,
    projects,
    projectsAlt,
    skills,
  },
  async asyncData({ app, query, error }) {
    try {
      const [
        formationsApi,
        skillsApi,
        projectsApi,
        passionsApi,
        textsApi,
        socialsApi,
      ] = await Promise.all([
        app.$axios.$get('formations'),
        app.$axios.$get('skills'),
        app.$axios.$get('projects'),
        app.$axios.$get('passions'),
        app.$axios.$get('texts'),
        app.$axios.$get('socials'),
      ])

      return {
        formations: formationsApi.data,
        skills: skillsApi.data,
        projects: projectsApi.data,
        passions: passionsApi.data,
        texts: textsApi.data,
        socials: socialsApi.data,
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)

      return {
        formations: [],
        skills: [],
        projects: [],
        passions: [],
        texts: [],
        socials: [],
      }
    }
  },
  head() {
    return {
      title: "Portfolio d'Ewilan Rivière",
    }
  },
}
</script>

<style></style>
