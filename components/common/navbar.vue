<template>
  <div class="fixed z-40 w-full dark-gradient">
    <div class="relative flex justify-between w-1/2">
      <button
        class="relative w-16 h-16 p-1 transition-all duration-300 bg-gray-500 rounded-full menu hover:bg-gray-400"
        :class="{ 'menu-opened': isOpen }"
        @click="switchMenu"
      >
        <client-only>
          <hamburger type="collapse" class="hamburger" />
        </client-only>
      </button>

      <icon name="portfolio-logo" class="mt-3" :size="75" />

      <github-ribbon />
    </div>

    <!-- <transition name="fade"> -->
    <div
      id="navbar"
      ref="sidenav"
      class="fixed top-0 bottom-0 left-0 z-10 w-0 h-full pt-20 overflow-hidden text-white transition-all duration-500 bg-gray-200"
      :class="{ 'w-64 navbar-shadow': isOpen }"
    >
      <transition name="fade">
        <ul v-if="isOpen" class="p-5 text-left">
          <li v-for="(link, id) in links" :key="id">
            <router-link
              :to="{ name: link.routeName }"
              class="block p-2 font-bold text-gray-800 transition-colors duration-300 rounded-sm hover:bg-white hover:text-black"
            >
              {{ link.label }}
            </router-link>
          </li>
        </ul>
      </transition>
    </div>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isOpen: false,
      links: [
        { label: 'Home', routeName: 'home', link: '/' },
        { label: 'Games', routeName: 'games', link: '/games' },
        { label: 'About', routeName: 'about', link: '/about' },
      ],
    }
  },
  mounted() {
    // this.$refs.sidenav.style.width = '250px'
  },
  methods: {
    switchMenu() {
      //   if (this.isOpen) {
      //     this.$refs.sidenav.style.width = '0'
      //   } else {
      //     this.$refs.sidenav.style.width = '250px'
      //   }
      this.isOpen = !this.isOpen
      this.$emit('switchMenu', this.isOpen)
    },
  },
}
</script>

<style lang="scss">
.navbar-shadow {
  box-shadow: 5px 0px 5px 0px rgba(lightgray, 0.75);
}
.dark-gradient {
  background: linear-gradient(
    rgba(gray, 0.8) 0%,
    rgba(lightgray, 0.7) 50%,
    rgba(lightgray, 0.2) 80%,
    rgba(lightgray, 0) 100%
  );
}
.menu {
  outline: none !important;
  top: 1rem;
  left: 1rem;
}
.hamburger {
  @apply absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.menu-opened {
  left: 10rem;
  @apply bg-transparent;
  svg {
    fill: theme('colors.switch') !important;
  }
  &:hover {
    background-color: theme('colors.switch') !important;
    svg {
      fill: white !important;
    }
  }
}
.menu-opened:hover {
  @apply bg-gray-100;
}

.router-link-active {
}
.router-link-exact-active {
  background-color: white;
  color: theme('colors.switch');
}

.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: all 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

/* The navigation menu links */
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
