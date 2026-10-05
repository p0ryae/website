<script lang="ts">
  import "../style.css";
  import { logo } from "$lib/logos";

  interface Project {
    name: string;
    repo: string;
    logo?: string;
    stack: string[];
    description: string;
  }

  const projects: Project[] = [
    {
      name: "Lazap",
      repo: "Lazap-Development/Lazap",
      logo: logo("lazap"),
      stack: ["C++", "ImGUI", "GLFW", "GLEW"],
      description:
        "A native, cross-platform attempt to unify your game clients into one fast, modern environment. I engineered it to consolidate 10+ clients into a single unified application, and reverse-engineered Valve's proprietary VDF binary format to build a fast, zero-copy, memory-safe parser. The project has earned 130+ GitHub stars and gained visibility among engineers at companies such as 1Password and Databricks.",
    },
    {
      name: "TRS_24",
      repo: "p0ryae/TRS_24",
      stack: ["Rust", "OpenGL", "winit", "nalgebra-glm"],
      description:
        "An OpenGL-powered game engine written in Rust (OpenGL 2.0+). I built it around modular design patterns so it deploys across Windows, Linux, and Android, with simplified NDK bundling for mobile. The library is published on crates.io and has reached 9.2K+ downloads.",
    },
    {
      name: "nix",
      repo: "p0ryae/nix",
      logo: logo("nix"),
      stack: ["Nix", "NixOS", "Linux", "Flakes"],
      description:
        "An opinionated NixOS flake for homelab, development and gaming systems. It keeps the configuration for all of these machines declarative and reproducible, managed from a single flake. I use it for my laptops, Raspberry PI 5, and my main desktop at home.",
    },
  ];

  const initials = (name: string) =>
    name
      .replace(/[^a-zA-Z0-9 ]/g, " ")
      .trim()
      .split(/\s+/)
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
</script>

<svelte:head>
  <title>Porya Dashtipour — Projects</title>
</svelte:head>

<h2>Projects</h2>

{#each projects as p}
  <article class="item">
    <div class="logo">
      {#if p.logo}
        <img src={p.logo} alt="{p.name} logo" loading="lazy" />
      {:else}
        <span class="initials" aria-hidden="true">{initials(p.name)}</span>
      {/if}
    </div>

    <div class="body">
      <h3 class="org">
        <a
          href="https://github.com/{p.repo}"
          target="_blank"
          rel="noopener noreferrer">{p.name}</a
        >
      </h3>
      <div class="company">{p.stack.join(", ")}</div>
      <p class="description">{p.description}</p>
    </div>
  </article>
{/each}
