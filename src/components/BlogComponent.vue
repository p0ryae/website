<template>
  <div class="middle">
    <div class="inside">
      <h2>📰 Blog</h2>
      <p>Soon...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleComponent",
  mounted() {
    document.title = "Blog | porya.me";
  },
};
</script>

<style scoped>
.list {
  margin-top: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.list .post {
  background-color: #7e4cea61;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  transition: background-color 0.15s ease;
  padding-left: 20px;
  padding-top: 20px;
}

.list .post:not(:first-child) {
  margin-top: 20px;
}

.list .post:hover {
  background-color: #7e4cea82;
  transition: background-color 0.15s ease;
  cursor: pointer;
}
</style>
