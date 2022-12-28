<template>
  <div class="hero-section">
    <div class="about-text hover-target">about</div>
    <div class="contact-text hover-target">contact</div>
    <div class="section-center">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <h1>Porya<br>Dashtipour</h1>
          </div>
          <div class="col-12 text-center mb-2 tags">
            <div class="dancing"><span>Software Engineer</span></div>
            <div class="dancing"><span>Full Stack Developer</span></div>
          </div>
          <div class="col-12 text-center">
            <p>
              <span class="expertise hover-target">// expertise</span>
              <span class="hover-target" id="github">// github</span>
              <span class="projects hover-target">// projects</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="about-section">
    <div class="about-close hover-target"></div>
    <div class="section-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mt-3">
            <p class="mb-1">As a software engineer and full-stack developer, I have a strong foundation in computer
              science and a passion for creating high-quality software.
              I have experience in various programming languages and frameworks such as Rust and Vue.JS and have
              developed various applications, from desktop software to web-based systems.
              I have a proven track record of delivering software on time and to specification, and am skilled at
              working independently and as part of a team. I am highly motivated, detail-oriented, and always striving
              to learn and improve my skills.
              I prioritize user experience, security, and scalability in my work and am committed to creating reliable,
              efficiently programmed, and easy-to-use software.</p>
          </div>
          <div class="col-12 text-center">
            <p class="mb-0"><span>- Porya Dashtipour</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="contact-section">
    <div class="contact-close hover-target"></div>
    <div class="section-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <a href="#" class="hover-target">dashcruft@gmail.com</a>
          </div>
          <div class="col-12 text-center social mt-4">
            <a href="https://youtube.com/dashcruft" class="hover-target" target="_blank">youtube</a>
            <a href="https://www.linkedin.com/in/porya-dashtipour-144a521aa/" class="hover-target"
              target="_blank">linkedin</a>
            <a href="https://github.com/p0ryae" class="hover-target" target="_blank">github</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="expertise-section">
    <div class="expertise-close hover-target"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 text-center">
          <h3>Expertise</h3>
        </div>
        <div class="list">
          <div class="children">
            <div class="info">
              <img src="./assets/icons/monitor.png">
              <h1><span1>Software</span1> Engineering</h1>
            </div>
            <pre><code>fn main() {
  let about_se: &str = <span style="color: rgb(65, 145, 65);">"Experienced
  in developing softwares using
  languages and frameworks such as 
  Rust, JavaScript, Vue.JS, and
  Tauri."</span>;
  <span style="color: rgb(131, 131, 238);">println!</span>("{}", about_se);
}</code></pre>
          </div>
          <div class="children">
            <div class="info">
              <img src="./assets/icons/vue.png">
              <h1><span2 style="">Full Stack</span2> Development</h1>
            </div>
            <pre><code>fn main() {
  let about_fsd: &str = <span style="color: rgb(65, 145, 65);">"Over four
  years of front-end and back-end
  development experience in HTML,
  CSS, JavaScript, and Vue.JS
  framework."</span>;
  <span style="color: rgb(131, 131, 238);">println!</span>("{}", about_fsd);
}</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="projects-section">
    <div class="projects-close hover-target"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 text-center">
          <h3>Projects</h3>
        </div>
      </div>
    </div>
  </div>

  <div class='cursor' id="cursor"></div>
  <div class='cursor2' id="cursor2"></div>
  <div class='cursor3' id="cursor3"></div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    window.addEventListener("load", this.onWindowLoad);
  },
  methods: {
    onWindowLoad() {
      document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
        t.style.left = n.clientX + "px",
          t.style.top = n.clientY + "px",
          e.style.left = n.clientX + "px",
          e.style.top = n.clientY + "px",
          i.style.left = n.clientX + "px",
          i.style.top = n.clientY + "px"
      });
      var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
      function n() {
        e.classList.add("hover"), i.classList.add("hover")
      }
      function s() {
        e.classList.remove("hover"), i.classList.remove("hover")
      }
      s();
      for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
      }
      function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
      }

      document.getElementsByClassName('about-text')[0].addEventListener('click', function () {
        document.body.classList.add("about-on");
      });
      document.getElementsByClassName('about-close')[0].addEventListener('click', function () {
        document.body.classList.remove("about-on")
      });

      document.getElementsByClassName('contact-text')[0].addEventListener('click', function () {
        document.body.classList.add("contact-on");
      });
      document.getElementsByClassName('contact-close')[0].addEventListener('click', function () {
        document.body.classList.remove("contact-on");
      });

      document.getElementsByClassName('expertise')[0].addEventListener('click', function () {
        document.body.classList.add("expertise-on");
      });
      document.getElementsByClassName('expertise-close')[0].addEventListener('click', function () {
        document.body.classList.remove("expertise-on");
      });

      document.getElementById('github').addEventListener('click', function () {
        window.open("https://github.com/p0ryae")
      });

      document.getElementsByClassName('projects')[0].addEventListener('click', function () {
        document.body.classList.add("projects-on");
      });
      document.getElementsByClassName('projects-close')[0].addEventListener('click', function () {
        document.body.classList.remove("projects-on");
      });
    },
  },
}


</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i');

@font-face {
  font-family: JetBrains-Regular;
  src: url("./assets/fonts/JetBrains\ Mono\ Regular\ Nerd\ Font\ Complete.ttf");
}

@font-face {
  font-family: JetBrains-Bold;
  src: url("./assets/fonts/JetBrains\ Mono\ SemiBold\ Nerd\ Font\ Complete.ttf");
}

body {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 1.6;
  color: #fff;
  background-color: #1f2029;
  color: rgb(65, 145, 65);
  overflow: hidden;
  height: 100vh;
  perspective: 800px;
  user-select: none;
}

a {
  cursor: pointer;
}

a:hover {
  text-decoration: none;
}

::selection {
  color: #c4c3ca;
  background-color: #000;
}

::-moz-selection {
  color: #c4c3ca;
  background-color: #000;
}

.cursor,
.cursor2,
.cursor3 {
  position: fixed;
  border-radius: 50%;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
  left: -100px;
  top: 50%;
  mix-blend-mode: difference;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}

.cursor {
  background-color: #fff;
  height: 0;
  width: 0;
  z-index: 99999;
}

.cursor2,
.cursor3 {
  height: 36px;
  width: 36px;
  z-index: 99998;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out
}

.cursor2.hover,
.cursor3.hover {
  -webkit-transform: scale(2) translateX(-25%) translateY(-25%);
  transform: scale(2) translateX(-25%) translateY(-25%);
  border: none
}

.cursor2 {
  border: 2px solid #fff;
}

.cursor2.hover {
  background: rgba(255, 255, 255, 1);
  border-color: transparent;
}

@media screen and (max-width: 1200px) {

  .cursor,
  .cursor2,
  .cursor3 {
    display: none
  }
}

.hero-section {
  position: relative;
  width: 100%;
  display: block;
  overflow: hidden;
  height: 100vh;
  background-image: url('./assets/1.png');
  background-size: cover;
  background-position: center;
  transform: scale(1) rotateX(0);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
  transform-origin: center top;
}

.hero-section h1 {
  color: #fff;
  font-size: 6vw;
  line-height: 1;
  font-weight: 900;
}

.hero-section .dancing {
  letter-spacing: 1px;
  color: #ffffff;
  font-size: 25px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 10px;
  margin-left: 10px;
}

.hero-section .tags {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.hero-section .dancing span {
  padding: 8px 15px;
  padding-right: 10px;
  display: inline-block;
  border-radius: 5px;
  background-color: #dd3358;
}

@media screen and (max-width: 580px) {
  .hero-section .dancing {
    font-size: 18px;
  }
}

.hero-section p {
  font-size: 20px;
  line-height: 1;
  font-weight: 700;
  color: #b19ccf;
}

.hero-section p span {
  margin-left: 15px;
  margin-right: 15px;
  position: relative;
  display: inline-block;
  cursor: pointer;
}


.about-text {
  position: absolute;
  font-size: 30px;
  line-height: 1;
  opacity: 0.5;
  font-weight: 700;
  color: #b19ccf;
  letter-spacing: 2px;
  top: 50%;
  left: 20px;
  cursor: pointer;
  z-index: 2;
  -webkit-writing-mode: vertical-lr;
  writing-mode: vertical-lr;
  transform: translateY(-50%);
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.about-text:hover {
  opacity: 1;
}

.about-section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: block;
  overflow: hidden;
  height: 100vh;
  background-color: #102770;
  transform: translateX(-100%);
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
  z-index: 10;
}

body.about-on .about-section {
  transform: translateX(0);
}

.about-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  display: block;
  overflow: hidden;
  height: 30px;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 36px 36px;
  background-image: url('http://www.ivang-design.com/svg-load/portfolio/close.svg');
  cursor: pointer;
  z-index: 11;
}

.about-close:hover {
  transform: rotate(90deg);
}

.section-center {
  position: absolute;
  width: 100%;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.about-section img {
  width: 240px;
  height: 240px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  box-shadow: 0 6px 25px rgba(255, 235, 167, .35);
}

.about-section p {
  letter-spacing: 1px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
}

.about-section p span {
  letter-spacing: 1px;
  color: #ffeba7;
  font-size: 20px;
  font-weight: 700;
}

.contact-text {
  position: absolute;
  font-size: 30px;
  line-height: 1;
  opacity: 0.5;
  font-weight: 700;
  color: #b19ccf;
  letter-spacing: 2px;
  top: 50%;
  right: 20px;
  cursor: pointer;
  z-index: 2;
  -webkit-writing-mode: vertical-lr;
  writing-mode: vertical-lr;
  transform: translateY(-50%) rotate(180deg);
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.contact-text:hover {
  opacity: 1;
}

.contact-section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: block;
  overflow: hidden;
  height: 100vh;
  background-color: #102770;
  transform: translateX(100%);
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
  z-index: 10;
}

body.contact-on .contact-section {
  transform: translateX(0);
}

.contact-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  display: block;
  overflow: hidden;
  height: 30px;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 36px 36px;
  background-image: url('http://www.ivang-design.com/svg-load/portfolio/close.svg');
  cursor: pointer;
  z-index: 11;
}

.contact-close:hover {
  transform: rotate(90deg);
}

.contact-section a {
  margin: 0 auto;
  font-size: 32px;
  font-weight: 900;
  letter-spacing: 1px;
  color: #fff;
  display: inline-block;
}

.contact-section .social a {
  margin-left: 8px;
  margin-right: 8px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #ffeba7;
}

@media screen and (max-width: 580px) {
  .contact-section a {
    font-size: 17px;
  }

  .contact-section .social a {
    margin-left: 3px;
    margin-right: 3px;
    font-size: 13px;
    letter-spacing: 0;
  }

  .hero-section .tags {
    margin-top: 10px;
    display: block;
  }

  .expertise-section .list {
    flex-direction: column;
    align-items: center;
  }
}

.expertise-section,
.projects-section {
  position: fixed;
  top: 100%;
  left: 0;
  padding: 100px 0;
  width: 100%;
  height: 100vh;
  display: block;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #102770;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
  z-index: 10;
}

.expertise-close,
.projects-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  display: block;
  overflow: hidden;
  height: 30px;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 36px 36px;
  background-image: url('http://www.ivang-design.com/svg-load/portfolio/close.svg');
  cursor: pointer;
  z-index: 11;
}

.expertise-close:hover,
.projects-close:hover {
  transform: rotate(90deg);
}

body.expertise-on .expertise-section {
  top: 0;
}

body.projects-on .projects-section {
  top: 0;
}

.expertise-section img,
.projects-section img {
  margin-top: 30px;
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}

.expertise-section h3,
.projects-section h3 {
  font-size: 7vw;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 1px;
  color: #fff;
}

.expertise-section p,
.projects-section p {
  font-size: 14px;
  line-height: 1.7;
  letter-spacing: 1px;
  font-weight: 500;
}

.expertise-section p span,
.projects-section p span {
  font-size: 20px;
  line-height: 1.3;
  font-weight: 700;
  color: #ffeba7;
}

.expertise-section .list {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.expertise-section .list .children {
  border: solid 2px white;
  color: white;
  width: 380px;
  height: 340px;
  padding: 40px 30px;
}

.expertise-section .list .children .info {
  display: flex;
  margin-bottom: 15px;
}

.expertise-section .list .children .info img {
  margin-right: 20px;
  width: 50px;
  height: 50px;
  box-shadow: none;
  margin-top: 8px;
}

.expertise-section .list .children .info h1 {
  font-family: JetBrains-Bold;
  font-size: 26px;
  font-weight: 700;
  word-spacing: -4px;
}

.expertise-section .list .children .info h1 span1 {
  background: linear-gradient(0deg, rgba(255, 0, 255, 0) 0%, rgba(255, 0, 255, 0) 16%, rgb(255, 60, 0) 16%, rgb(255, 60, 0) 41%, rgba(255, 0, 255, 0) 41%);
}

.expertise-section .list .children .info h1 span2 {
  background: linear-gradient(0deg, rgba(255, 0, 255, 0) 0%, rgba(255, 0, 255, 0) 16%, rgb(74, 179, 228) 16%, rgb(74, 179, 228) 41%, rgba(255, 0, 255, 0) 41%);
}

.expertise-section .list .children pre {
  font-family: JetBrains-Bold;
  color: rgb(215, 230, 243);
  background-color: #1A191D;
  padding: 10px;
  border-radius: 10px;
}

.expertise-section .list .children code {
  font-family: JetBrains-Bold;
  color: rgb(215, 230, 243);
}

.logo {
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: block;
  z-index: 200000;
  transition: all 250ms linear;
}

.logo img {
  height: 26px;
  width: auto;
  display: block;
  mix-blend-mode: difference;
}


@media (max-width: 1200px) {
  .hero-section .dancing {
    font-size: 16px;
  }
}

@media (max-width: 967px) {
  .hero-section h1 {
    font-size: 11vw;
  }

  .hero-section p {
    font-size: 18px;
  }

  .hero-section p span {
    margin-left: 10px;
    margin-right: 10px;
  }

  .expertise-section h3,
  .projects-section h3 {
    font-size: 13vw;
  }
}
</style>
