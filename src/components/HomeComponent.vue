<template>
  <div class="flex flex-col md:flex-row gap-6 items-center">
    <img
      src="../assets/logo.png"
      alt="Logo"
      class="w-40 h-40 rounded-full border-4 border-accent"
    />
    <div class="flex flex-col items-center md:items-start">
      <h1 class="text-2xl font-bold">Porya Dashtipour</h1>
      <h2 class="text-lg mt-1 font-bold">
        <span class="text-[#97D4E9]">CS</span> @
        <span class="text-[#0055b7]">UBC</span> | Software Engineer
      </h2>
      <h2 class="mt-1 font-semibold">
        contact@porya.me
      </h2>
      <div class="flex mt-4 space-x-3">
        <a
          href="mailto:contact@porya.me"
          target="_blank"
          class="text-white hover:text-accent transition-colors duration-100 ease-linear"
        >
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            ></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
        <a
          href="https://github.com/p0ryae"
          target="_blank"
          class="text-white hover:text-accent transition-colors duration-100 ease-linear"
        >
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/p0ryae/"
          target="_blank"
          class="text-white hover:text-accent transition-colors duration-100 ease-linear"
        >
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            ></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a
          href="https://leetcode.com/u/p0ryae/"
          target="_blank"
          class="text-white hover:text-accent transition-colors duration-100 ease-linear"
        >
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 -2 26 28"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"
            ></path>
            <path
              d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  methods: {
    goToProjects() {
      this.$router.push("/projects");
    },
    openLink(link) {
      window.open(link, "_blank");
    },
  },
  mounted() {
    document.title = "Home | porya.me";
  },
};
</script>
