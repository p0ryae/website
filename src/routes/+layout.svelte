<script lang="ts">
  import "./layout.css";
  import favicon from "#lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="container">
  {@render children()}

  <footer>
    This custom portfolio was made with
    <a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer"
      >Svelte</a
    >
    and
    <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"
      >Node.js</a
    >. Heavily inspired by
    <a
      href="https://www.cs.ubc.ca/~ibouache/"
      target="_blank"
      rel="noopener noreferrer">Ibtissem Bouacheria's page</a
    >, my professor for CPSC 317. You can find the source code
    <a
      href="https://github.com/p0ryae/website"
      target="_blank"
      rel="noopener noreferrer">here</a
    >.
  </footer>
</div>
