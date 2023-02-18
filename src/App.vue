<template>
  <div class="navbarMenu reveal-1" id="navbarMenu"></div>

  <div class="headerSection">
    <h1 id="homePg">Porya Dashtipour</h1>
    <div class="selector">
      <a href="#home">Home</a>
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>

    <div class="mobileSelector">
      <div class="nav-but-wrap">
        <div class="menu-icon hover-target" id="navbar">
          <span class="menu-icon__line menu-icon__line-left"></span>
          <span class="menu-icon__line"></span>
          <span class="menu-icon__line menu-icon__line-right"></span>
        </div>
      </div>
    </div>
  </div>

  <section class="section reveal" id="home">
    <div class="normal">
      <div class="left">
        <h1>Software Engineer</h1>
        <h1>Full-Stack Developer</h1>
        <h1>Linux Enthusiast</h1>
      </div>

      <div class="right">
        <img class="home-preview" src="./assets/lazap.png" alt="" />
      </div>
    </div>

    <div class="mobile">
      <div class="right">
        <img class="home-preview" src="./assets/lazap.png" alt="" />
      </div>

      <div class="left">
        <h1>Software Engineer</h1>
        <h1>Full-Stack Developer</h1>
        <h1>Linux Enthusiast</h1>
      </div>
    </div>
  </section>

  <section class="section-1 reveal" id="projects">
    <h1>Projects</h1>
    <div class="projects">
      <div class="project" id="lazap">
        <div class="info">
          <img src="./assets/icons/lazap.png" alt="" />
          <div class="texts">
            <h3>Lazap</h3>
            <h4>
              Lightweight cross-platform launcher, unifying your gaming world
              into a single, modern library 🎮
            </h4>
          </div>
        </div>
      </div>
      <div class="project" id="zeurus">
        <div class="info">
          <img src="./assets/icons/zeurus.png" alt="" />
          <div class="texts">
            <h3>Zeurus</h3>
            <h4>
              Lightweight cross-platform blazingly fast code/text editor with
              syntax hghlighting.
            </h4>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-1 reveal" id="contact">
    <h1>Contact</h1>
    <div class="contact-section">
      <div class="container">
        <div class="col-12 text-center social">
          <a
            href="https://youtube.com/dashcruft"
            class="hover-target"
            target="_blank"
            ><img src="./assets/icons/youtube.svg" alt=""
          /></a>
          <a
            href="https://github.com/p0ryae"
            class="hover-target"
            target="_blank"
            ><img src="./assets/icons/github.svg" alt=""
          /></a>
          <a
            href="https://www.linkedin.com/in/porya-dashtipour-144a521aa/"
            class="hover-target"
            target="_blank"
          >
            <img src="./assets/icons/linkedin-in.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <h1>Copyright © 2023 p0ryae</h1>
  </footer>
</template>

<script>
export default {
  name: "App",
  mounted() {
    document.getElementById("lazap").addEventListener("click", function () {
      window.open("https://github.com/Lazap-Development/Lazap");
    });
    document.getElementById("zeurus").addEventListener("click", function () {
      window.open("https://github.com/p0ryae/zeurus");
    });
    document.getElementById("homePg").addEventListener("click", function () {
      window.location.href = "/";
    });

    /*document.getElementById("navbar").addEventListener("click", function () {
      if (document.getElementById("navbarMenu").style.display == "flex") {
        document.getElementById("navbarMenu").style.display = "none";
      } else if (
        document.getElementById("navbarMenu").style.display == "none"
      ) {
        document.getElementById("navbarMenu").style.display = "flex";
      } else if (!document.getElementById("navbarMenu").style.display) {
        document.getElementById("navbarMenu").style.display = "flex";
      }
    });
    */
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

html,
body {
  background: #111111 !important;
}

#app {
  background: #111111 !important;
  font-family: "Poppins";
  font-size: 16px;
  color: #fff;
  overflow-x: hidden;
}

.headerSection {
  display: flex;
  width: 100%;
  padding-top: 2.2vw;
  padding-bottom: 2.2vw;
  padding-left: 4vw;
  padding-right: 4vw;
  align-items: center;
  animation: smoothFade 1s;
}

.headerSection h1 {
  font-weight: 500;
  font-size: 38px;
  margin: 0px;
}

.headerSection h1:hover {
  cursor: pointer;
}

.headerSection .selector {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.headerSection .selector a {
  position: relative;
  color: #fff;
  text-decoration: none;
  margin-left: 60px;
  font-size: 20px;
  word-spacing: -2px;
}

.headerSection .selector a::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.headerSection .selector a:hover::before {
  transform: scaleX(1);
}

.headerSection .mobileSelector {
  display: none;
}

.section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 3.5vw;
  margin-bottom: 7vw;
}

.section .left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 7vw;
}

.section .right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 7vw;
}

.section .home-preview {
  width: 44vw;
  border: 6px rgb(124, 98, 216) solid;
  border-radius: 40px;
}

.section h1 {
  color: rgb(255, 255, 255);
  margin: 6px;
  font-size: 60px;
  font-weight: 600;
}

.section .normal {
  display: flex;
}

.section .mobile {
  display: none;
}

.reveal {
  animation: reveal 1s cubic-bezier(0.77, 0, 0.175, 1);
}

.reveal-1 {
  animation: reveal-1 1s cubic-bezier(0.77, 0, 0.175, 1);
}

.section-1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.6vw;
  margin-bottom: 5vw;
}

.section-1 h1 {
  font-weight: 900;
  font-size: 50px;
  text-transform: uppercase;
}

.section-1 .projects {
  margin: 30px;
  display: flex;
}

.section-1 .project {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  width: 500px;
  height: 160px;
  background-color: #131313;
  border: 6px rgb(124, 98, 216) solid;
  margin: 20px;
  border-radius: 30px;
  transition: transform 0.2s;
}

.section-1 .project:hover {
  cursor: pointer;
  transform: translate(0px, -10px);
  transition: transform 0.2s;
}

.section-1 .project .banner {
  object-fit: cover;
  height: 120%;
  width: 100%;
  border-radius: 20px;
}

.section-1 .project .info {
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 20px 20px;
}

.section-1 .project .info .texts {
  margin-left: 20px;
  margin-top: -5px;
}

.section-1 .project .info h3 {
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 0px;
}

.section-1 .project .info h4 {
  color: #d8d8d8;
  font-size: 16px;
}

.section-1 .project .info img {
  user-select: none;
  width: 100px;
  height: 100px;
}

.contact-section a {
  margin: 0 auto;
  font-size: 32px;
  font-weight: 900;
  letter-spacing: 1px;
  color: #cfcfcf;
  display: inline-block;
}

.contact-section .social a {
  margin-left: 8px;
  margin-right: 8px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  height: 40px;
  width: 40px;
  text-decoration: none;
  transition: all 100ms linear;
  filter: brightness(0) invert(0.8);
  margin: 14px;
}

.contact-section .social a:hover {
  scale: 1.1;
}

.menu-icon {
  height: 30px;
  width: 30px;
  position: relative;
  z-index: 2;
  cursor: pointer;
  display: block;
}

.menu-icon__line-left {
  width: 16.5px;
  transition: all 200ms linear;
}

.menu-icon__line-right {
  width: 16.5px;
  float: right;
  transition: all 200ms linear;
}

.menu-icon:hover .menu-icon__line-left,
.menu-icon:hover .menu-icon__line-right {
  width: 30px;
}

.email button {
  font-weight: 700;
  letter-spacing: 1px;
  text-decoration: none;
  color: #ffffff;
  border: none;
  background: none;
  font-size: 24px;
  text-decoration: none;
  transition: all 0.2s;
}

.email button:hover {
  color: rgb(103, 71, 219);
  transition: all 0.2s;
}

.nav-but-wrap {
  position: relative;
  display: inline-block;
  padding-left: 15px;
  padding-top: 15px;
  transition: all 0.3s ease-out;
}

.menu-icon {
  height: 30px;
  width: 30px;
  position: relative;
  z-index: 2;
  cursor: pointer;
  display: block;
}

.menu-icon__line {
  height: 2px;
  width: 30px;
  display: block;
  background-color: #fff;
  margin-bottom: 7px;
  cursor: pointer;
  transition: background-color 0.5s ease, -webkit-transform 0.2s ease;
  transition: transform 0.2s ease, background-color 0.5s ease;
  transition: transform 0.2s ease, background-color 0.5s ease,
    -webkit-transform 0.2s ease;
}

.menu-icon__line-left {
  width: 16.5px;
  transition: all 200ms linear;
}

.menu-icon__line-right {
  width: 16.5px;
  float: right;
  transition: all 200ms linear;
}

.menu-icon:hover .menu-icon__line-left,
.menu-icon:hover .menu-icon__line-right {
  width: 30px;
}

.navbarMenu {
  position: absolute;
  display: none;
  width: 65%;
  height: 350px;
  margin: 30px;
  z-index: 1000;
  background-color: black;
  border-radius: 30px;
}

footer {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(122, 122, 122);
}

footer h1 {
  margin: 0px;
  font-size: 18px;
}

@keyframes reveal {
  0% {
    transform: translate(0, 5%);
    opacity: 0;
  }

  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}

@keyframes reveal-1 {
  0% {
    transform: translate(0, 5%);
    opacity: 0.5;
  }

  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}

@keyframes smoothFade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@media only screen and (max-width: 1200px) {
  .section .right img {
    width: 400px;
  }
}

@media only screen and (max-width: 900px) {
  .headerSection .mobileSelector {
    display: block;
  }

  .headerSection .selector {
    display: none;
  }

  .headerSection {
    padding: 40px;
  }

  .headerSection h1 {
    width: 10px;
    margin-right: auto;
  }

  .section .mobile {
    display: flex;
    padding: 20px;
    flex-direction: column;
  }

  .section .normal {
    display: none;
  }

  .section .right {
    margin-left: auto;
    margin-right: auto;
  }

  .section .left {
    margin-top: 10px;
    margin-left: 2px;
    margin-right: auto;
  }

  .section .left h1 {
    font-size: 28px;
    margin: 2px;
  }
}

@media only screen and (max-width: 700px) {
  .section .right img {
    width: 340px;
  }

  .section .home-preview {
    width: 44vw;
    
    border-radius: 20px;
  }

  .section-1 .projects {
    display: flex;
    flex-direction: column;
  }

  .section-1 .project {
    width: 87vw;
    height: 140px;
    margin: 10px;
  }

  .section-1 .project .info img {
    width: 75px;
    height: 75px;
  }

  .section-1 .project .info h4 {
    font-size: 14px;
  }

  footer h1 {
    font-size: 16px;
  }
}
</style>
