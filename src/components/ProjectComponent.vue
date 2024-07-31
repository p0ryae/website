<template>
  <div class="middle">
    <div class="inside">
      <h2>🎯 Projects</h2>
      <p>Most of my projects are @ github, but below are the most notable:</p>
      <div class="line"></div>
      <div class="list">
        <div class="project">
          <div class="top">
            <img src="../assets/icons/lazap.png" alt="Lazap Logo" />
            <div class="title-section">
              <h2>Lazap</h2>
              <h3>⦁ Open-Source</h3>
            </div>
            <a href="https://github.com/Lazap-Development/Lazap" target="_blank"
              >Source Code</a
            >
          </div>
          <p>
            A lightweight Cross-Platform Software, unifying various clients into
            a single, modern library. Backend uses Rust, Frontend uses Vue +
            Vite, thanks to the Tauri toolkit. Received over 100+ user-given
            stars on GitHub, and perceived by Engineers within companies such as
            1Password. Certified as a 100% clean software by Softpedia.
          </p>
        </div>
        <div class="project">
          <div class="top">
            <img src="../assets/rust-logo.png" alt="Rust Logo" />
            <div class="title-section">
              <h2>TRS_24</h2>
              <h3>⦁ Open-Source</h3>
            </div>
            <a href="https://github.com/p0ryae/TRS_24" target="_blank"
              >Source Code</a
            >
          </div>
          <p>
            A versatile game engine developed in Rust, featuring support for
            both 3D and 2D rendering. Engineered with optimal performance in
            mind, it leverages the OpenGL 2.0 API for compatibility across a
            range of GPUs and integrated GPUs, while also offering
            cross-platform support for Windows, MacOS, Linux, and Android
            builds.
          </p>
        </div>
        <div class="project">
          <div class="top">
            <img src="../assets/liemcomputing.png" alt="Lazap Logo" />
            <div class="title-section">
              <h2>LiemComputing</h2>
              <h3>⦁ Closed-Source</h3>
            </div>
            <a href="https://liemcomputing.ca/" target="_blank">To Website</a>
          </div>
          <p>
            An automated, secure and efficient platform for SD40 district
            students programming courses. Features include secure login,
            progress tracking, assessments, SECCOMP for restrict system calls
            and sandboxing program execution, and socket-to-socket
            communication. It's utilized by hundreds of active NWSS students
            daily, with well over +146k true-user traffic weekly.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectComponent",
};
</script>

<style scoped>
h1 {
  margin-bottom: 4px;
}

p {
  margin-bottom: 18px;
  color: #d0d0d4;
}

.line {
  height: 2px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.list {
  height: 100%;
  width: 100%;
  color: #e4e4e7;
  margin-bottom: 40px;
}

.list .project {
  margin-top: 20px;
}

.list .project .top {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.list .project .top .title-section {
  line-height: 35px;
}

.list .project .top h2 {
  font-size: 22px;
  margin-right: 10px;
}

.list .project .top h3 {
  font-size: 16px;
  font-weight: normal;
  color: #8a8a8a;
  margin-top: -15px;
}

.list .project .top img {
  width: 25px;
  height: 25px;
  margin-right: 10px;
  user-select: none;
}

.list .project .top a {
  margin-left: auto;
  text-decoration: none;
  color: #0ea5e9;
}

.list .project .top a:hover {
  text-decoration: underline !important;
  color: #0ea5e9;
}

.list .project p {
  margin-top: 0px;
  line-height: 26px;
}

@media screen and (max-width: 768px) {
  .list .project .top {
    flex-wrap: wrap;
  }

  .list .project p {
    font-size: 15px;
  }

  .list .project .top h2 {
    font-size: 20px;
  }

  .list .project .top h3 {
    width: 100%;
    font-size: 15px;
    order: 1;
  }

  .list .project .top a {
    font-size: 14px;
    order: 2;
  }
}
</style>
