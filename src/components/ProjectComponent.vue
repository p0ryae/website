<template>
  <div class="middle">
    <div class="inside">
      <h2>🎯 Projects</h2>
      <p>Most of my projects are @ github, with the highlights below:</p>
      <div class="line"></div>
      <div class="list">
        <div class="project">
          <div class="item"></div>
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
          <div class="item"></div>
          <div class="top">
            <img src="../assets/icons/rust.png" alt="Rust Logo" />
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectComponent",
  mounted() {
    document.title = "🎯 Project | porya.me";
  },
};
</script>

<style scoped>
p {
  margin-bottom: 0 !important;
}

.list {
  height: 100%;
  width: 100%;
  color: #e4e4e7;
  margin-bottom: 40px;
  margin-left: -10px;
}

.list .project {
  border-left: 4px solid #7e4ceab9;
  padding-left: 24px;
}

.list .project:not(:last-child) {
  padding-bottom: 20px;
}

.list .project .item {
  background-color: #7e4cea;
  width: 120px;
  height: 0.6rem;
  margin-left: -31px;
  width: 0.6rem;
  margin-bottom: -18px;
  border-radius: 50%;
}

.list .project .top {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.list .project .top .title-section {
  line-height: 35px;
  font-size: 14px;
}

.list .project .top h2 {
  margin-right: 10px;
}

.list .project .top h3 {
  font-size: 16px;
  font-weight: 600;
  color: #8a8a8a;
  margin-top: -15px;
}

.list .project .top img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  user-select: none;
  margin-top: -5px;
}

.list .project .top a {
  margin-left: auto;
  text-decoration: none;
  font-weight: 600;
  color: #7e4cea;
}

.list .project .top a:hover {
  text-decoration: underline !important;
}

.list .project p {
  padding-bottom: 10px;
  margin-bottom: 0px !important;
  margin-top: 0px !important;
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
