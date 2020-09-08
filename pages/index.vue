<template>
  <div>
    <!-- <intro-logo /> -->
    <!-- <introduction :texts="texts" :socials="socials"></introduction> -->
    <hero />
    <features />
    <!-- {{ apiData }} -->
    <formations :formations="formations" />
    <!-- <projects-list :projects="projects" /> -->
    <projects-alt />
    <!-- <skills :skills="skills" /> -->
    <!-- <contact></contact> -->
    <v-footer />
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
// eslint-disable-next-line no-unused-vars
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
  asyncData({ app, params, error }) {
    return app.$axios
      .$get('formations')
      .then((res) => {
        console.log(res)
        return {
          formations: res.data,
        }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Billet non trouvé' })
      })
  },
  // async asyncData({ app, query, error }) {
  //   try {
  //     const [
  //       formations,
  //       skills,
  //       projects,
  //       // passionsApi,
  //       // textsApi,
  //       // socialsApi
  //     ] = await Promise.all([
  //       app.$axios.$get('formations'),
  //       app.$axios.$get(
  //         `skills?${qs.stringify({
  //           categories:
  //             'framework-librairies,langages-de-developpement,technologies-logiciels',
  //           limit: '9',
  //           shuffle: true,
  //           favorite: true,
  //         })}`
  //       ),
  //       app.$axios.$get(
  //         `projects?${qs.stringify({
  //           limit: '6',
  //         })}`
  //       ),
  //       // app.$axios.$get('passions'),
  //       // app.$axios.$get('texts'),
  //       // app.$axios.$get('socials')
  //     ])
  //     console.log('bouh?')
  //     console.log(formations)

  //     return {
  //       formations: formations.data,
  //       skills: skills.data,
  //       projects: projects.data,
  //       // passions: passionsApi.data,
  //       // texts: textsApi.data,
  //       // socials: socialsApi.data
  //     }
  //   } catch (error) {
  //     // eslint-disable-next-line no-console
  //     console.log(error)

  //     return {
  //       formations: [],
  //       skills: [],
  //       projects: [],
  //       passions: [],
  //       texts: [],
  //       socials: [],
  //     }
  //   }
  // },
  data() {
    return {
      api: 'https://portfolio.ewilan-riviere.com/api/portfolio/formations',
      apiData: [],
    }
  },
  mounted() {
    console.log('bouyah?')
    this.getData()
  },
  methods: {
    async getData() {
      try {
        this.apiData = await this.$axios.get(this.api)
      } catch (error) {
        console.log(error)
      }
    },
  },
  head() {
    return {
      title: "Portfolio d'Ewilan Rivière",
    }
  },
}
</script>

<style></style>
