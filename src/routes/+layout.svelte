<script>
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import "@fontsource/jetbrains-mono/400.css";
  import "@fontsource/jetbrains-mono/700.css";

  let { children } = $props();

  const name = "Porya Dashtipour";
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="container">
  <div class="prompt-bar">
    <span class="prompt-tag">[{name}] $</span>
    <span class="prompt-path">
      ./<a href="/">home</a> ./<a href="/experience">experience</a>
    </span>
  </div>

  <div class="panel">
    <div class="main-content">
      {@render children()}
    </div>
  </div>

  <footer>
    <p class="poem-line" dir="rtl" lang="fa">
      جهان سر به سر چو فسانه‌ست و بس نماند بد و نیک بر هیچ‌کس
    </p>
    <p class="poem-line">
      But all this world is a tale we hear; Men's evil, and their glory,
      disappear.
    </p>
    <p class="poem-attribution">
      — Ferdowsi, Shahnameh (Persian Book of Kings)
    </p>
  </footer>
</div>
