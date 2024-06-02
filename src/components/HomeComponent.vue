<template>
  <div class="middle">
    <div class="inside">
      <h2>Porya D.</h2>
      <p>Software Engineer_</p>
      <div class="buttons-list">
        <button @click="openLink('https://github.com/p0ryae')">github</button>
        <button @click="openLink('https://www.linkedin.com/in/p0ryae/')">
          linkedin
        </button>
        <button @click="goToProjects">project</button>
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
};
</script>

<style scoped>
.inside p {
  color: #d0d0d4;
  margin-bottom: 20px;
}

.inside .buttons-list {
  display: flex;
  flex-direction: row;
}

.inside .buttons-list button {
  width: 130px;
  height: 40px;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  margin-right: 12px;
  background-color: #782c8d00;
  color: #d0d0d4;
  font-family: "JetBrains Mono";
  border: 2px solid #fff;
  font-weight: 700;
  font-size: 16px;
}

.inside .buttons-list:last-child {
  margin-right: 0px;
}

.inside .buttons-list button:hover {
  cursor: pointer;
  border: 3px solid #fff;
}

.banner {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
}

.banner .bro {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 20%;
}

img {
  width: 200px;
  height: 200px;
}
</style>
