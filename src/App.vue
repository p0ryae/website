<template>
  <div class="header">
    <div class="titlebar">
      <router-link activeClass="active" to="/">🏡 [porya.me]</router-link>
      <div class="sections">
        <router-link activeClass="active" to="/experience"
          >💼 [experience]</router-link
        >
        <router-link activeClass="active" to="/projects"
          >🎯 [projects]</router-link
        >
        <router-link activeClass="active" to="/blog">📰 [blog]</router-link>
      </div>
    </div>
  </div>

  <transition>
    <router-view />
  </transition>

  <footer>© Porya Dashtipour 2024</footer>
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
/* @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"); */

html,
body {
  background: #0c0b0e !important;
  margin: 0px;
}

#app {
  background: #0c0b0e !important;
  font-family: "Montserrat", serif;
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
  font-weight: 600;
}

h2 {
  margin-top: 5px;
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
  transition: color 0.15s ease;
}

.header a:hover {
  color: #7e4cea;
  transition: color 0.15s ease;
}

.header .titlebar {
  margin: auto;
  justify-content: space-between;
  display: flex;
  width: 30%;
  text-align: center;
  font-weight: 600;
  gap: 0.5rem;
}

.header .titlebar .active {
  color: #7e4cea;
}

.header .sections {
  align-items: center;
  display: flex;
  gap: 1.5rem;
  user-select: none;
  cursor: default !important;
  text-align: center;
}

.sections .active {
  color: #7e4cea;
}

.sections a:hover {
  color: #7e4cea;
}

.middle {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
}

.middle .inside {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 30%;
}

.middle .center-phone {
  align-items: flex-start;
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
  font-size: 16px;
  margin-top: 50px;
  font-weight: 600;
}

.line {
  height: 2px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
}

@media only screen and (max-width: 1600px) {
  .header {
    padding: 1.5rem 1.5rem;
  }

  .titlebar {
    width: 100% !important;
  }

  .inside {
    width: 87% !important;
  }

  .sections {
    gap: 0.5rem !important;
  }

  .inside .parent {
    display: flex;
  }
}

@media screen and (max-width: 568px) {
  .middle .center-phone {
    align-items: center !important;
  }
}
</style>
