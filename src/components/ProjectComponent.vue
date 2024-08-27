<template>
  <h1 class="text-2xl font-bold text-white mb-6">Projects</h1>
  <div class="flex flex-col rounded-lg py-2">
    <div class="flex items-center space-x-4 mb-4">
      <img src="../assets/icons/lazap.png" alt="Lazap Logo" class="w-10 h-10" />
      <div class="flex flex-col flex-grow">
        <h2 class="text-xl font-bold text-white">Lazap</h2>
        <h3 class="text-gray-500 font-semibold text-sm">Client Unifier</h3>
      </div>
      <a
        href="https://github.com/Lazap-Development/Lazap"
        target="_blank"
        class="text-accent font-semibold hover:underline"
      >
        👨‍💻 Source Code
      </a>
    </div>
    <p
      class="leading-relaxed md:hyphens-auto md:text-justify text-gray-100 text-base font-semibold mb-4"
    >
      A lightweight cross-platform unification software that consolidates 10+
      clients into a single modern library. Built with a Rust backend, and Vue +
      Vite frontend. Earned 100+ stars on GitHub and received recognition from
      engineers at companies such as 1Password. Rated 4.5/5 and certified as a
      100% clean software by Softpedia.
    </p>
  </div>
  <div class="flex flex-col py-2">
    <div class="flex items-center space-x-4 mb-4">
      <img src="../assets/icons/rust.png" alt="Rust Logo" class="w-10 h-10" />
      <div class="flex flex-col flex-grow">
        <h2 class="text-xl font-bold text-white">TRS_24</h2>
        <h3 class="text-gray-500 font-semibold text-sm">Game Engine</h3>
      </div>
      <a
        href="https://github.com/p0ryae/TRS_24"
        target="_blank"
        class="block ml-auto text-accent font-semibold hover:underline"
        >👨‍💻 Source Code</a
      >
    </div>
    <p
      class="leading-relaxed md:hyphens-auto md:text-justify text-gray-100 text-base font-semibold mb-4"
    >
      A game engine developed in Rust, featuring support for both 3D and 2D
      rendering. Engineered with optimal performance in mind, it leverages the
      OpenGL 2.0 API for compatibility across a range of GPUs and integrated
      GPUs, while also offering cross-platform support for Windows, MacOS,
      Linux, and Android builds. Published library on crates.io, achieving over
      3K+ downloads.
    </p>
  </div>
  <div class="flex flex-col py-2">
    <div class="flex items-center space-x-4 mb-4">
      <img
        src="../assets/icons/volvocomm.png"
        alt="VolvoComm Logo"
        class="w-10 h-10"
      />
      <div class="flex flex-col flex-grow">
        <h2 class="text-xl font-bold text-white">VolvoComm</h2>
        <h3 class="text-gray-500 font-semibold text-sm">Secure Messaging</h3>
      </div>
      <a
        href="https://github.com/p0ryae/VolvoComm"
        target="_blank"
        class="ml-auto text-accent font-semibold hover:underline"
        >👨‍💻 Source Code</a
      >
    </div>
    <p
      class="leading-relaxed md:hyphens-auto md:text-justify text-gray-100 text-base font-semibold mb-4"
    >
      A lightweight, secure, and real-time messaging system. Powered by a Rust
      backend and a React frontend using TypeScript and Next.js. This project is
      designed with a strong focus on performance and security. Currently a work
      in progress, development efforts are centered on expanding features and
      optimizing both the backend and frontend for maximum efficiency.
    </p>
  </div>
</template>

<script>
export default {
  name: "ProjectComponent",
  mounted() {
    document.title = "Projects | porya.me";
  },
};
</script>
