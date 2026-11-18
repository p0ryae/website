<script lang="ts">
  import Icon from "@iconify/svelte";
  import { shared } from "#lib/shared.svelte";

  const ipa = "[puriːjɑː dæʃtiːpuːɾ]";

  const facts = [
    [
      { text: "Studying " },
      { text: "Computer Science", href: "https://www.cs.ubc.ca/about/numbers" },
      { text: " @ " },
      { text: "University of British Columbia", href: "https://www.ubc.ca/" },
    ],
    [
      { text: "Specialized in " },
      {
        text: "Systems Programming",
        href: "https://en.wikipedia.org/wiki/Systems_programming",
      },
      { text: ", " },
      {
        text: "OS Internals",
        href: "https://en.wikipedia.org/wiki/Operating_system",
      },
      { text: ", " },
      {
        text: "Networking",
        href: "https://en.wikipedia.org/wiki/Computer_network",
      },
      { text: ", and " },
      {
        text: "Software Architecture",
        href: "https://en.wikipedia.org/wiki/Software_architecture",
      },
    ],
    [
      { text: "Arch Linux", href: "https://archlinux.org/" },
      { text: " veteran" },
      {
        text: ", current reproducible systems enjoyer and endless configurator on ",
      },
      { text: "NixOS", href: "https://nixos.org/" },
    ],
    [
      { text: "Casual " },
      { text: "philosophy", href: "https://en.wikipedia.org/wiki/Philosophy" },
      { text: " and " },
      { text: "history", href: "https://en.wikipedia.org/wiki/History" },
      {
        text: " enthusiast to think better and fail less boringly",
      },
    ],
    [
      { text: "Fluent in " },
      {
        text: "English",
        href: "https://en.wikipedia.org/wiki/English_language",
      },
      { text: " and " },
      {
        text: "Persian",
        href: "https://en.wikipedia.org/wiki/Persian_language",
      },
      { text: ", with some knowledge of " },
      { text: "Latin", href: "https://en.wikipedia.org/wiki/Latin" },
      { text: " (Salvete!)" },
    ],
  ];

  type Job = {
    dates: string;
    current?: boolean;
    role: string;
    org: string;
    note?: string;
    location: string;
    extra?: string;
  };

  type Project = {
    name: string;
    href: string;
    stack: string;
    desc: string;
  };

  const experience: Job[] = [
    {
      dates: "Sep 2026 – Present",
      current: true,
      role: "Software Engineer",
      org: "University of British Columbia",
      location: "Vancouver, BC",
    },
    {
      dates: "Jan 2026 – Aug 2026",
      role: "Software Engineer",
      org: "Corvus Energy",
      note: "Co-op",
      location: "Richmond, BC",
    },
    {
      dates: "Sep 2024 – Dec 2025",
      role: "Software Engineer",
      org: "University of British Columbia",
      location: "Vancouver, BC",
    },
    {
      dates: "May 2024 – Aug 2025",
      role: "Teaching Assistant",
      org: "Langara College",
      location: "Vancouver, BC",
    },
    {
      dates: "Sep 2022 – Aug 2023",
      role: "Lead Software Engineer",
      org: "New Westminster Secondary School",
      location: "New Westminster, BC",
      extra: "LiemComputing",
    },
  ];

  const projects: Project[] = [
    {
      name: "Lazap",
      href: "https://github.com/Lazap-Development/Lazap",
      stack: "C++, ImGUI, GLFW, libwayland, GLEW",
      desc: "A native, cross-platform attempt to unify video games into one fast, modern environment. It consolidate 10+ clients into a single unified application. Reverse-engineered Valve’s proprietary binary VDF format and built a fast, memory-safe, zero-copy parser for it. Project has earned 130+ GitHub stars and gained visibility among engineers at companies such as 1Password and Databricks.",
    },
    {
      name: "TRS_24",
      href: "https://github.com/p0ryae/TRS_24",
      stack: "Rust, OpenGL, winit, nalgebra-glm",
      desc: "An OpenGL-powered game engine written in Rust (OpenGL 2.0+). I built it around modular design patterns so it deploys across Windows, Linux, and Android, with simplified NDK bundling for mobile. The library is published on crates.io and has reached 9.2K+ downloads.",
    },
    {
      name: "interline-tts",
      href: "https://github.com/UBC-Korean-Studies/interline-tts",
      stack: "Python, gRPC, Supertonic 3",
      desc: "A low-latency gRPC speech synthesis service for UBC's InterlineReader, the online reader used by Korean literature students. It runs Supertonic 3 on ONNX Runtime to read Korean text aloud on demand, so students can hear the stories they are studying. Its efficient implementation and ongoing maintenance were part of my job as a Software Engineer at UBC.",
    },
    {
      name: "nix",
      href: "https://github.com/p0ryae/nix",
      stack: "Nix, NixOS, Linux",
      desc: "An opinionated NixOS flake for homelab, development and gaming systems. It keeps the configuration for all of these machines declarative and reproducible, managed from a single flake. I use it for my Framework 13 Pro, Raspberry PI 5, and my main desktop at home. It is actively maintained with best practices in mind.",
    },
  ];

  // type Post = {
  //   slug: string;
  //   title: string;
  //   date: string;
  //   summary: string;
  // };

  // const posts: Post[] = [
  //   {
  //     slug: "llms-as-cs",
  //     title: "Hello, World! Or... Hello LLMs?",
  //     date: "Nov 2026",
  //     summary:
  //       "How LLMs have impacted the life of an average Computer Science student across the world.",
  //   },
  //   // {
  //   //   slug: "cs-courses-review",
  //   //   title: "Reviewing Every CS Course I've Taken",
  //   //   date: "Nov 2026",
  //   //   summary: "Honest feedback on the degree, course by course.",
  //   // },
  // ];

  const sections = ["about", "experience", "projects"];
</script>

<svelte:head>
  <title>{shared.name}</title>
</svelte:head>

<div class="affil">𓄂𓆃 {ipa}</div>
<h1>{shared.name}</h1>

<dl class="kv">
  <dd>
    <div class="icon-row">
      <a
        href="https://github.com/p0ryae"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <Icon icon="mdi:github" width={26} />
      </a>
      <a
        href="https://www.linkedin.com/in/p0ryae/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Icon icon="mdi:linkedin" width={26} />
      </a>
      <a href="mailto:contact@porya.me" aria-label="Email">
        <Icon icon="mdi:email-outline" width={26} />
      </a>
    </div>
  </dd>
</dl>

<nav>
  {#each sections as s (s)}<a href="#{s}">{s[0].toUpperCase() + s.slice(1)}</a
    >{/each}
</nav>

<blockquote>
  But all this world is a tale we hear; Men's evil, and their glory, disappear.
  <span>— Ferdowsi, Shahnameh (Persian Book of Kings)</span>
</blockquote>

<h2 id="about">About</h2>
<p>
  Hey there! My name is {shared.name} and welcome to my portfolio. Below are some
  facts about me:
</p>
<ul>
  {#each facts as fact, i (i)}
    <li>
      {#each fact as part, k (k)}{#if part.href}
          <a href={part.href} target="_blank" rel="external noopener noreferrer"
            >{part.text}</a
          >{:else}{part.text}{/if}{/each}
    </li>
  {/each}
</ul>
<p>
  Feel free to visit
  <a href="https://github.com/p0ryae" target="_blank" rel="noopener noreferrer">
    my GitHub
  </a>
  to check out my most notable projects (they are pinned) and their source code.
</p>

<h2 id="experience">Experience</h2>
<div class="scroll">
  <table>
    <thead>
      <tr><th>Dates</th><th>Role</th><th>Organization</th></tr>
    </thead>
    <tbody>
      {#each experience as j (j.dates)}
        <tr>
          <td>
            {j.dates}
            {#if j.current}<span class="badge">current</span>{/if}
          </td>
          <td>
            {j.role}
            {#if j.extra}<div class="muted">{j.extra}</div>{/if}
          </td>
          <td>
            {j.org}{#if j.note}<span class="muted"> · {j.note}</span>{/if}
            <div class="muted">{j.location}</div>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<h2 id="projects">Projects</h2>
{#each projects as p (p.name)}
  <h3>
    <a href={p.href} target="_blank" rel="noopener noreferrer">{p.name}</a>
  </h3>
  <div class="muted">{p.stack}</div>
  <p>{p.desc}</p>
{/each}
