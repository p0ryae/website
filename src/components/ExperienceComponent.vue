<template>
  <div class="middle">
    <div class="inside">
      <h2>💼 Experience</h2>
      <p>Outlined below is my latest professional experience:</p>
      <div class="line"></div>
      <div class="list">
        <div class="job">
          <div class="item"></div>
          <div class="top">
            <img src="../assets/icons/ubc.png" alt="UBC Logo" />
            <div class="title-section">
              <h2>Software Engineer</h2>
              <h3>⦁ University of British Columbia</h3>
            </div>
          </div>
        </div>
        <div class="job">
          <div class="item"></div>
          <div class="top">
            <img src="../assets/icons/langara.png" alt="Langara Logo" />

            <div class="title-section">
              <h2>Teaching Assistant</h2>
              <h3>⦁ Langara College</h3>
            </div>
          </div>
        </div>
        <div class="job">
          <div class="item"></div>
          <div class="top">
            <img src="../assets/icons/nwss.png" alt="Langara Logo" />

            <div class="title-section">
              <h2>Lead Software Engineer</h2>
              <h3>⦁ New Westminster Secondary School</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactComponent",
  mounted() {
    document.title = "💼  Experience | porya.me";
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

.list .job {
  border-left: 4px solid #7e4ceab9;
  padding-left: 28px;
}

.list .job .item {
  background-color: #7e4cea;
  width: 120px;
  height: 0.6rem;
  margin-left: -35px;
  width: 0.6rem;
  margin-bottom: 5px;
  border-radius: 50%;
}

.list .job .top {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.list .job .top .title-section {
  line-height: 35px;
  font-size: 14px;
}

.list .project .top h2 {
  margin-right: 10px;
}

.list .job .top h3 {
  font-size: 16px;
  font-weight: 600;
  color: #8a8a8a;
  margin-top: -15px;
}

.list .job .top img {
  width: 60px;
  height: 60px;
  margin-right: 15px;
  user-select: none;
  margin-top: -15px;
  border-radius: 25%;
}

.list .job .top a {
  margin-left: auto;
  text-decoration: none;
  font-weight: 600;
  color: #7e4cea;
}

.list .job .top a:hover {
  text-decoration: underline !important;
}

.list .job p {
  padding-bottom: 10px;
  margin-bottom: 0px !important;
  margin-top: 0px !important;
}

@media screen and (max-width: 768px) {
  .list .job {
    padding-left: 25px;
  }

  .list .job .top {
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .list .job .item {
    margin-left: -32px;
  }

  .list .job p {
    font-size: 15px;
  }

  .list .job .top img {
    margin-right: 12px;
  }

  /* .list .job .top .title-section {
  }
 */
  .list .job .top h3 {
    font-size: 15px;
  }

  .list .job .top a {
    font-size: 14px;
    order: 2;
  }
}
</style>
