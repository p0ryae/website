<template>
  <div class="header">
    <div class="titlebar">
      <router-link to="/">p0ryae</router-link>
      <div class="sections">
        <router-link to="/projects">projects</router-link>
        <router-link to="/articles">articles</router-link>
        <router-link to="/contact">contact</router-link>
      </div>
    </div>
  </div>

  <transition
    enter-active-class="animate__animated animate__fadeIn animate__faster"
    leave-active-class="animate__animated animate__fadeOut animate__faster"
  >
    <router-view />
  </transition>

  <footer>© p0ryae 2024</footer>
</template>

<script>
export default {
  name: "App",
  computed: {
    currentRouteComponent() {
      if (this.$route.matched[0]) {
        return this.$route.matched[0].components.default.name;
      } else {
        return "none";
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

html,
body {
  background: #0c0b0e !important;
  margin: 0px;
}

#app {
  background: #0c0b0e !important;
  font-family: "JetBrains Mono";
  font-weight: 500;
  font-size: 16px;
  color: #d4d4d4;
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0px;
}

p {
  line-height: 1.6rem;
  font-size: 16px;
}

h2 {
  margin-bottom: 5px;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1.5rem 1rem;
}

.header a {
  text-decoration: none;
  color: white;
}

.header a:hover {
  color: white;
}

.header .titlebar {
  margin: auto;
  justify-content: space-between;
  display: flex;
  width: 30%;
}

.header .sections {
  align-items: center;
  display: flex;
  gap: 1.5rem;
  user-select: none;
  cursor: default !important;
}

.middle {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
}

.middle .inside {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 30%;
}

.middle h1 {
  font-size: 28px;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
  color: white;
  text-align: center;
  font-size: 14px;
  margin-top: auto;
}

@media only screen and (max-width: 1100px) {
  .header {
    padding: 1.5rem 1.5rem;
  }

  .titlebar {
    width: 100% !important;
  }

  .inside {
    width: 80% !important;
  }

  .middle .inside .buttons-list {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .middle .inside .buttons-list button {
    width: 160px;
    height: 45px;
    margin-bottom: 10px !important;
    margin-right: 0px !important;
  }

  .sections {
    gap: 0.5rem !important;
  }
}
</style>
