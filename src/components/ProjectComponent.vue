<template>
  <div class="middle">
    <div class="inside">
      <h2>🎯 Projects</h2>
      <p>
        Most of my projects are @ github, with below being the most notable:
      </p>
      <div class="line"></div>
      <div class="list">
        <div class="project">
          <div class="item"></div>
          <div class="top">
            <img src="../assets/icons/lazap.png" alt="Lazap Logo" />
            <div class="title-section">
              <h2>Lazap</h2>
              <h3>Software</h3>
            </div>
            <a href="https://github.com/Lazap-Development/Lazap" target="_blank"
              >👨‍💻 Source Code</a
            >
          </div>
          <p>
            A lightweight cross-platform software unifying 10+ clients into a
            single modern library. Built with Rust backend, Vue + Vite frontend,
            and Tauri toolkit. Earned 100+ stars on GitHub and recognition from
            engineers at companies such as 1Password. Rated 4.5/5 and as a
            certified 100% clean software by Softpedia.
          </p>
        </div>
        <div class="project">
          <div class="item"></div>
          <div class="top">
            <img src="../assets/icons/rust.png" alt="Rust Logo" />
            <div class="title-section">
              <h2>TRS_24</h2>
              <h3>Game Engine</h3>
            </div>
            <a href="https://github.com/p0ryae/TRS_24" target="_blank"
              >👨‍💻 Source Code</a
            >
          </div>
          <p>
            A game engine developed in Rust, featuring support for both 3D and
            2D rendering. Engineered with optimal performance in mind, it
            leverages the OpenGL 2.0 API for compatibility across a range of
            GPUs and integrated GPUs, while also offering cross-platform support
            for Windows, MacOS, Linux, and Android builds. Published library on
            crates.io, achieving over 3K+ downloads.
          </p>
        </div>
        <div class="project">
          <div class="item"></div>
          <div class="top">
            <img src="../assets/icons/volvocomm.png" alt="VolvoComm Logo" />
            <div class="title-section">
              <h2>VolvoComm</h2>
              <h3>Messaging</h3>
            </div>
            <a href="https://github.com/p0ryae/VolvoComm" target="_blank"
              >👨‍💻 Source Code</a
            >
          </div>
          <p>
            A lightweight, secure, and real-time messaging platform, powered by
            a Rust backend and a React (TypeScript) frontend using Next.js. This
            project is designed with a strong focus on performance and security.
            Currently a work in progress, development efforts are centered on
            expanding features and optimizing both the backend and frontend for
            maximum efficiency.
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
    document.title = "Project | porya.me";
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
}

.list .project {
  border-left: 4px solid #7e4ceab9;
  padding-left: 24px;
}

.list .project:not(:last-child) {
  padding-bottom: 20px;
}

.list .project .item {
  background-color: #fff;
  border: 4px #7e4cea solid;
  height: 0.6rem;
  margin-left: -34px;
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
  margin-top: 10px;
}

.list .project .top a:hover {
  text-decoration: underline !important;
}

.list .project p {
  padding-bottom: 10px;
  margin-bottom: 0px !important;
  margin-top: 0px !important;
  text-align: justify;
}

@media screen and (max-width: 768px) {
  .list .project .top {
    flex-wrap: wrap;
  }

  .list .project p {
    text-align: left;
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
