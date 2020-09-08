<template>
  <div>
    <!-- <intro-logo /> -->
    <!-- <introduction :texts="texts" :socials="socials"></introduction> -->
    <hero />
    <features />
    <formations :formations="formations" />
    <projects-list :projects="projects" />
    <projects-alt />
    <skills :skills="skills" />
    <!-- <contact></contact> -->
    <v-footer />
  </div>
</template>

<script>
import qs from 'qs'
// import introLogo from '~/components/intro-logo.vue'
import hero from '@/components/blocks/hero'
import contact from '@/components/blocks/contact'
import features from '@/components/blocks/features'
import formations from '@/components/blocks/formations'
import projectsList from '@/components/blocks/projects'
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
    projectsList,
    projectsAlt,
    skills,
  },
  async asyncData({ app, query, error }) {
    try {
      const [
        formations,
        skills,
        projects,
        // passionsApi,
        // textsApi,
        // socialsApi
      ] = await Promise.all([
        app.$axios.$get('formations'),
        app.$axios.$get(
          `skills?${qs.stringify({
            categories:
              'framework-librairies,langages-de-developpement,technologies-logiciels',
            limit: '9',
            shuffle: true,
            favorite: true,
          })}`
        ),
        app.$axios.$get(
          `projects?${qs.stringify({
            limit: '6',
          })}`
        ),
        // app.$axios.$get('passions'),
        // app.$axios.$get('texts'),
        // app.$axios.$get('socials')
      ])
      console.log(formations)

      return {
        formations: formations.data,
        skills: skills.data,
        projects: projects.data,
        // passions: passionsApi.data,
        // texts: textsApi.data,
        // socials: socialsApi.data
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
