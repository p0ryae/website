<script>
  import Icon from "@iconify/svelte";
  import { shared } from "$lib/shared.svelte";

  const ipa = "[puriːjɑː]";

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
      { text: " " },
      { text: "Arch Linux", href: "https://archlinux.org/" },
      { text: " veteran, present " },
      { text: "NixOS", href: "https://nixos.org/" },
      { text: " endless configurator" },
    ],
    [
      { text: "Casual free-thinking " },
      { text: "philosophy", href: "https://en.wikipedia.org/wiki/Philosophy" },
      { text: " and " },
      { text: "history", href: "https://en.wikipedia.org/wiki/History" },
      { text: " enthusiast" },
    ],
    [
      { text: "I can read, write and speak " },
      {
        text: "English",
        href: "https://en.wikipedia.org/wiki/English_language",
      },
      { text: ", " },
      {
        text: "Persian",
        href: "https://en.wikipedia.org/wiki/Persian_language",
      },
      { text: " and some " },
      { text: "Latin", href: "https://en.wikipedia.org/wiki/Latin" },
    ],
  ];
</script>

<svelte:head>
  <title>{shared.name}</title>
</svelte:head>

<div class="home">
  <div class="main-content">
    <p>Greetings. My name is {shared.name}. Below are some facts about me:</p>
    <ul class="facts">
      {#each facts as fact}
        <li>
          {#each fact as part}{#if part.href}
              <a href={part.href} target="_blank" rel="noopener noreferrer"
                >{part.text}</a
              >{:else}{part.text}{/if}{/each}
        </li>
      {/each}
    </ul>
    <p>
      You can view my experience by running
      <code>./experience</code> in the shell here. If you are too lazy, not
      cool, or non-technical, press the provided
      <code>./experience</code>
      hyperlink up top.
    </p>
    <p>
      Feel free to visit <a href="https://github.com/p0ryae" target="_blank"
        >my github</a
      > to checkout my most notable projects.
    </p>
    <p>
      Blog is coming soon (been planning to review the cs courses I've taken)...
    </p>
  </div>

  <div class="sidebar">
    <div class="handle">𓄂𓆃 {ipa}</div>
    <div class="desc">Reach out to me via:</div>
    <div class="icon-row">
      <a href="https://github.com/p0ryae" target="_blank" aria-label="GitHub">
        <Icon icon="mdi:github" width={26} />
      </a>
      <a
        href="https://www.linkedin.com/in/p0ryae/"
        target="_blank"
        aria-label="LinkedIn"
      >
        <Icon icon="mdi:linkedin" width={26} />
      </a>
      <a href="mailto:contact@porya.me" target="_blank" aria-label="Email">
        <Icon icon="mdi:email-outline" width={26} />
      </a>
    </div>
    <hr class="rule" />
    <div class="desc">
      This custom portfolio was made with
      <a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer"
        >Svelte</a
      >
      and
      <a href="https://deno.com/" target="_blank" rel="noopener noreferrer"
        >Deno</a
      >. Inspired by
      <a
        href="https://github.com/joeroe/risotto"
        target="_blank"
        rel="noopener noreferrer">Risotto</a
      >. You can find the source code
      <a
        href="https://github.com/p0ryae/website"
        target="_blank"
        rel="noopener noreferrer">here</a
      >.
    </div>
  </div>
</div>
