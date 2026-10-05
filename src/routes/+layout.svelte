<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import "@fontsource/jetbrains-mono/400.css";
  import "@fontsource/jetbrains-mono/700.css";
  import { shared } from "$lib/shared.svelte";
  import { logoUrls } from "$lib/logos";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  let { children } = $props();

  const commands: Record<string, string> = {
    "./home": "/",
    "../": "/",
    "./experience": "/experience",
    "./projects": "/projects",
  };

  let typed = $state("");
  let typing = $state(false);

  let tabMatches: string[] = [];
  let tabIndex = -1;

  function commonPrefix(words: string[]): string {
    let prefix = words[0];
    for (const w of words) {
      while (!w.startsWith(prefix)) prefix = prefix.slice(0, -1);
    }
    return prefix;
  }

  onMount(() => {
    function handleKeydown(e: KeyboardEvent) {
      const tag = document.activeElement?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (e.key !== "Tab" && e.key !== "Shift") tabIndex = -1;

      if (e.key === "Tab") {
        if (!typing) return;
        e.preventDefault();

        if (tabIndex === -1) {
          tabMatches = Object.keys(commands).filter((c) => c.startsWith(typed));
          if (tabMatches.length === 0) return;

          const common = commonPrefix(tabMatches);
          if (common.length > typed.length) {
            typed = common;
            return;
          }
          tabIndex = 0;
        } else {
          tabIndex = (tabIndex + 1) % tabMatches.length;
        }

        typed = tabMatches[tabIndex];
        return;
      }

      if (e.key === "Escape") {
        typed = "";
        typing = false;
        return;
      }

      if (e.key === "Enter") {
        const route = commands[typed];
        if (route) goto(route);
        typed = "";
        typing = false;
        return;
      }

      if (e.key === "Backspace") {
        typed = typed.slice(0, -1);
        typing = typed.length > 0;
        return;
      }

      if (e.key.length === 1) {
        typed += e.key;
        typing = true;

        const route = commands[typed];
        if (route) {
          goto(route);
          typed = "";
          typing = false;
        }
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  {#each logoUrls as url}
    <link rel="preload" as="image" href={url} />
  {/each}
</svelte:head>

<div class="container">
  <div class="prompt-bar">
    <span class="prompt-tag"
      >[{shared.name.split(" ")[0].toLowerCase()}@{shared.domain}] $</span
    >
    <span class="prompt-path">
      {#if typing}
        {typed}<span class="cursor">▌</span>
      {:else}
        ./<a href="/">home</a> ./<a href="/experience">experience</a> ./<a
          href="/projects">projects</a
        >
      {/if}
    </span>
  </div>

  <div class="panel">
    <div class="main-content">
      {@render children()}
    </div>
  </div>

  <footer>
    <!-- <p class="poem-line" dir="rtl" lang="fa"> -->
    <!--   جهان سر به سر چو فسانه‌ست و بس نماند بد و نیک بر هیچ‌کس -->
    <!-- </p> -->
    <p class="poem-line">
      But all this world is a tale we hear; Men's evil, and their glory,
      disappear.
    </p>
    <p class="poem-attribution">
      — Ferdowsi, Shahnameh (Persian Book of Kings)
    </p>
  </footer>
</div>
