<template>
  <h2 class="text-2xl font-bold text-white mb-6">Experience</h2>
  <div class="flex flex-col space-y-4">
    <div class="flex items-center space-x-4">
      <img
        src="../assets/icons/ubc.png"
        alt="UBC Logo"
        class="w-16 h-16 rounded-2xl"
      />
      <div class="flex flex-col w-[58vw]">
        <h2
          class="text-lg md:text-xl font-bold text-white text-ellipsis whitespace-nowrap overflow-hidden"
        >
          Software Engineer
        </h2>
        <div class="flex flex-col">
          <h3
            class="text-gray-300 text-base font-semibold text-ellipsis whitespace-nowrap overflow-hidden"
          >
            University of British Columbia
          </h3>
          <h4 class="text-gray-500 text-sm font-semibold">Vancouver, BC</h4>
        </div>
      </div>
    </div>
    <!-- Uncomment and use below for detailed description -->
    <!-- <p class="text-gray-200 mt-2 text-base">
          Description of the role and achievements can go here.
        </p> -->
  </div>
  <div class="flex flex-col space-y-4 mt-4">
    <div class="flex items-center space-x-4">
      <img
        src="../assets/icons/langara.png"
        alt="Langara Logo"
        class="w-16 h-16 rounded-2xl"
      />
      <div class="flex flex-col w-[58vw]">
        <h2 class="text-lg md:text-xl font-bold text-white">Teaching Assistant</h2>
        <div class="flex flex-col">
          <h3
            class="text-gray-300 text-base font-semibold text-ellipsis whitespace-nowrap overflow-hidden"
          >
            Langara College
          </h3>
          <h4 class="text-gray-500 text-sm font-semibold">Vancouver, BC</h4>
        </div>
      </div>
    </div>
    <!-- Uncomment and use below for detailed description -->
    <!-- <p class="text-gray-200 mt-2 text-base">
          Description of the role and achievements can go here.
        </p> -->
  </div>
  <div class="flex flex-col space-y-4 mt-4">
    <div class="flex items-center space-x-4">
      <img
        src="../assets/icons/nwss.png"
        alt="NWSS Logo"
        class="w-16 h-16 rounded-2xl"
      />
      <div class="flex flex-col w-[58vw]">
        <h2
          class="text-lg md:text-xl font-bold text-white text-ellipsis whitespace-nowrap overflow-hidden"
        >
          Lead Software Engineer
        </h2>
        <div class="flex flex-col">
          <h3
            class="text-gray-300 text-base font-semibold text-ellipsis whitespace-nowrap overflow-hidden"
          >
            New Westminster Secondary School
          </h3>
          <h4 class="text-gray-500 text-sm font-semibold">
            New Westminster, BC
          </h4>
        </div>
      </div>
    </div>
    <!-- Uncomment and use below for detailed description -->
    <!-- <p class="text-gray-200 mt-2 text-base">
          Description of the role and achievements can go here.
        </p> -->
  </div>
</template>

<script>
export default {
  name: "ContactComponent",
  mounted() {
    document.title = "Experience | porya.me";
  },
};
</script>
