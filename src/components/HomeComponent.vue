<template>
  <div class="middle">
    <div class="inside">
      <div class="parent">
        <img src="../assets/logo.png" alt="Logo" />
        <div class="parent2">
          <h2>Porya Dashtipour</h2>
          <h4>
            <font color="#97D4E9">CS</font> @ <font color="#0055B7">UBC</font> |
            Software Engineer
          </h4>
          <div class="buttons-list">
            <a href="https://github.com/p0ryae" target="_blank">
              <i
                style="scale: 0.98"
                class="fab fa-github fa-2x"
                title="GitHub"
              ></i>
            </a>
            <a href="https://www.linkedin.com/in/p0ryae/" target="_blank">
              <i
                style="scale: 1.07"
                class="fab fa-linkedin-in fa-2x"
                title="LinkedIn"
              ></i>
            </a>
            <a href="https://leetcode.com/u/p0ryae/" target="_blank">
              <i
                style="scale: 0.95"
                class="fas fa-circle-nodes fa-2x"
                title="LeetCode"
              ></i>
            </a>
            <a href="mailto:contact@porya.me" target="_blank">
              <i
                class="fas fa-envelope fa-2x"
                title="Email: contact@porya.me"
              ></i>
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
  mounted() {
    document.title = "🏡  Home | porya.me";
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
  border-radius: 50%;
  outline: #7e4cea 4px solid;
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
  transition: color 0.15s ease;
}

.inside .buttons-list a:hover {
  color: #7e4cea;
  transition: color 0.15s ease;
}

.inside .buttons-list i {
  font-size: 30px;
  height: 30px;
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
</style>
