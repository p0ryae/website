<template>
  <div class="middle">
    <div class="inside">
      <div class="parent">
        <img src="../assets/logo.png" alt="Logo" />
        <div class="parent2">
          <h2>Porya D.</h2>
          <h4>UBC | Software Engineer</h4>
          <div class="buttons-list">
            <a href="https://github.com/p0ryae" target="_blank">
              <i class="fab fa-github fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/p0ryae/" target="_blank">
              <i class="fab fa-linkedin fa-5x"></i>
            </a>
          </div>
        </div>
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

.inside h4 {
  margin-top: 5px;
}

.inside .buttons-list {
  display: flex;
  flex-direction: row;
}

.inside .parent {
  margin-top: 5px;
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.inside .parent img {
  border-radius: 20%;
  width: 150px;
  height: 150px;
}

.inside .parent2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.inside .buttons-list a {
  text-decoration: none;
  color: inherit;
  margin-right: 12px;
}

.inside .buttons-list i {
  font-size: 30px;
  width: 30px;
  height: 30px;
  margin: 0px;
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
