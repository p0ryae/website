<template>
    <div class="middle">
        <div class="inside">
            <h2>p0ryae</h2>
            <p>
                Software Engineer_
                <br>
            </p>
            <div class="buttons-list">
                <button @click="goToProjects">Projects</button>
                <button @click="openLink('https://github.com/p0ryae')">GitHub</button>
                <button @click="openLink('https://www.linkedin.com/in/p0ryae/')">LinkedIn</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'HomeComponent',
    methods: {
        goToProjects() {
            this.$router.push('/projects');
        },
        openLink(link) {
            window.open(link, '_blank');
        },
    },
}
</script>
  
<style scoped>
.inside h2 {
    margin-bottom: 2px;
}

.inside p {
    color: #d0d0d4;
}

.inside .buttons-list {
    display: flex;
    flex-direction: row;
}

.inside .buttons-list button {
    width: 120px;
    height: 40px;
    text-decoration: none;
    border: rgb(89, 37, 172) 3px solid;
    border-radius: 15px;
    margin-right: 15px;
    background-color: rgba(255, 255, 255, 0);
    color: #d0d0d4;
    font-family: "JetBrains Mono";
    font-weight: 800;
    transition: all 0.1s;
    font-size: 14px;
}

.inside .buttons-list button:hover {
    cursor: pointer;
    background-color: rgba(89, 37, 172, 0.4);
    transition: all 0.1s;
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