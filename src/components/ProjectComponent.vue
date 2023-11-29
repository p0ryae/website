<template>
    <div class="middle">
        <div class="inside">
            <h1>projects</h1>
            <p>most of my projects are @ github, but below are the most notable;</p>
            <div class="line"></div>
            <div class="list">
                <div class="project">
                    <div class="top">
                        <img src="../assets/icons/lazap.png" alt="Lazap Logo">
                        <h2>lazap</h2>
                        <a href="https://github.com/Lazap-Development/Lazap" target="_blank">Source Code</a>
                    </div>
                    <p>
                        Lightweight cross-platform client, unifying games into a single, modern library.
                        Backend uses Rust, Frontend uses VueJS, thanks to Tauri toolkit.
                        Ensured customization options, providing users with the ability to personalize the software
                        according to their preferences.
                    </p>
                </div>
                <div class="project">
                    <div class="top">
                        <img src="../assets/icons/julia.png" alt="Julia Logo">
                        <h2>PJ-Judge</h2>
                        <a href="https://github.com/PJ-Duo/PJ-Judge" target="_blank">Source Code</a>
                    </div>
                    <p>
                        WIP Artificial Intelligence algorithm with code Judging capability, using NLP techniques.
                        Optimized memory management techniques in Julia DataFrames, enabling processing of larger
                        datasets within limited resources.
                        Applied sentiment analysis algorithm using Flux.jl to effectively filter out negative data from
                        the input DataFrames for better model performance.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ProjectComponent',
}
</script>
  
<style scoped>
h1 {
    margin-bottom: 4px;
}

p {
    margin-bottom: 18px;
    color: #d0d0d4;
    font-weight: 400;
}

.line {
    height: 2px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
}

.list {
    height: 100%;
    width: 100%;
    color: #e4e4e7;
}

.list .project {
    margin-top: 20px;
}

.list .project .top {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.list .project .top {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.list .project .top h2 {
    font-size: 22px;
}

.list .project .top img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
    user-select: none;
}

.list .project .top a {
    margin-left: auto;
    text-decoration: none;
    color: #0ea5e9;
}

.list .project .top a:hover {
    text-decoration: underline !important;
    color: #0ea5e9;
}

.list .project p {
    margin-top: 0px;
    line-height: 26px;
}
</style>