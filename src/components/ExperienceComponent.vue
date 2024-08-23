<template>
  <div class="middle">
    <div class="inside">
      <h2>💼 [Experience]</h2>
      <p>Outlined below is my history of professional experience:</p>
      <div class="line"></div>
      <div class="list">
        <div class="job">
          <div class="top">
            <img src="../assets/icons/ubc.png" alt="UBC Logo" />
            <div class="title-section">
              <h2>Software Engineer</h2>
              <div class="same-line">
                <h3>University of British Columbia</h3>
                <h4>Vancouver, BC</h4>
              </div>
            </div>
          </div>
          <!-- <p></p> -->
        </div>
        <div class="job">
          <div class="top">
            <img src="../assets/icons/langara.png" alt="Langara Logo" />
            <div class="title-section">
              <h2>Teaching Assistant</h2>
              <div class="same-line">
                <h3>Langara College</h3>
                <h4>Vancouver, BC</h4>
              </div>
            </div>
          </div>
          <!-- <p>
            Assessed labs, assignments, and projects for various Computer
            Science courses, offering detailed feedback focused on best
            practices and strategies. Leveraged expertise in diverse programming
            languages and tools, collaborating closely with the course
            instructor to comprehend and apply grading criteria and
            expectations.
          </p> -->
        </div>
        <div class="job">
          <div class="top">
            <img src="../assets/icons/nwss.png" alt="Langara Logo" />

            <div class="title-section">
              <h2>Lead Software Engineer</h2>
              <div class="same-line">
                <h3>New Westminster Secondary School</h3>
                <h4>New Westminster, BC</h4>
              </div>
            </div>
          </div>
          <!-- <p>
            Architected and engineered LiemComputing, a scalable platform for
            SD40 secondary-school students, featuring secure code execution
            through the Linux Kernel's SECCOMP module and efficient RESTful APIs
            built with Node.js and Express. The platform supports 500+ students
            annually and handles over 146K+ true-user visits weekly. Wrote
            detailed technical documentation, spanning 60+ pages, for the
            platform's nature in terms of design and functionality.
          </p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactComponent",
  mounted() {
    document.title = "Experience | porya.me";
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
}

.list .job {
  padding: 10px;
  padding-left: 25px;
  border-left: 4px solid #7e4ceab9;
}

.list .job:not(:last-child) {
  padding-bottom: 15px;
}

.list .job .item {
  background-color: #fff;
  border: 4px #7e4cea solid;
  height: 0.6rem;
  width: 0.6rem;
  border-radius: 50%;
}

.list .job .item:hover {
  cursor: pointer;
}

.list .job .top {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.list .job .top .title-section {
  font-size: 14px;
  width: 100%;
}

.list .job .top .title-section h2 {
  margin-top: 0px;
}

.list .job .top .title-section .same-line {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.list .job .top .title-section .same-line h3 {
  margin-top: 0px;
  margin-bottom: 4px;
  color: #e4e4e7;
}

.list .job .top .title-section .same-line h4 {
  margin-top: 0px;
  margin-bottom: 0px;
  color: #8a8a8a;
  font-weight: 600;
}

.list .job .top .title-section a {
  height: 20px;
  margin-left: auto;
  text-decoration: none;
  font-weight: 600;
  cursor: text;
  font-size: 16px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.list .project .top h2 {
  margin-right: 10px;
}

.list .job .top h3 {
  font-size: 16px;
  font-weight: 600;
  color: #8a8a8a;
}

.list .job .top img {
  width: 60px;
  height: 60px;
  margin-right: 15px;
  user-select: none;
  border-radius: 25%;
}

.list .job .top a:hover {
  cursor: text;
}

.list .job p {
  padding-bottom: 10px;
  margin-bottom: 0px !important;
  margin-top: 0px !important;
}

@media screen and (max-width: 768px) {
  .list .job .top {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    justify-content: center;
  }

  .list .job .item {
    margin-left: -35px;
    margin-bottom: -45px;
  }

  .list .job p {
    font-size: 15px;
    padding-bottom: 20px !important;
  }

  .list .job .top img {
    width: 70px;
    height: 70px;
  }

  .list .job .top .title-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .list .job .top .title-section .same-line {
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
  }

  .list .job .top h2 {
    font-size: 18px;
    width: 55vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .list .job .top h3 {
    font-size: 15px;
    width: 55vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .list .job .top a {
    margin-left: 0px !important;
    font-size: 14px !important;
    margin-bottom: 0px;
    margin-top: -12px;
    margin-left: -4px !important;
  }
}
</style>
