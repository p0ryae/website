<template>
  <div class="min-h-screen bg-bg">
    <div class="header mb-5 flex flex-row justify-center p-6">
      <div
        class="titlebar mx-auto flex justify-center w-[100%] lg:w-[30%] text-center font-semibold gap-1 lg:gap-2 text-white"
      >
        <div class="sections flex items-center gap-2 lg:gap-6 select-none">
          <router-link
            class="hover:text-accent transition-colors duration-100 ease-linear"
            activeClass="text-accent"
            to="/"
          >
            🏡 [porya.me]
          </router-link>

          <router-link
            class="hover:text-accent transition-colors duration-100 ease-linear"
            activeClass="text-accent"
            to="/experience"
            >💼 [experience]</router-link
          >
          <router-link
            class="hover:text-accent transition-colors duration-100 ease-linear"
            activeClass="text-accent"
            to="/projects"
            >📝 [projects]</router-link
          >
          <router-link
            class="hover:text-accent transition-colors duration-100 ease-linear"
            activeClass="text-accent"
            to="/blog"
            >📰 [blog]</router-link
          >
        </div>
      </div>
    </div>

    <transition>
      <div class="flex box-content items-center justify-center text-white">
        <div
          class="box-content w-[78%] md:w-[50%] xl:w-[40%] 2xl:w-[30%] bg-compBg flex-col justify-center p-6 md:p-8 rounded-2xl"
        >
          <router-view />
        </div>
      </div>
    </transition>

    <footer
      class="flex justify-center items-center w-full pb-10 text-white text-center text-base mt-12 font-bold"
    >
      <div class="bg-compBg rounded-full px-6 py-3">
        © Porya Dashtipour 2024
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    currentRouteComponent() {
      return this.$route.matched[0]
        ? this.$route.matched[0].components.default.name
        : "none";
    },
  },
};
</script>
