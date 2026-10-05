<script lang="ts">
  import "../style.css";
  import { logo } from "$lib/logos";

  interface Role {
    title: string;
    type?: string;
    period: string;
    bullets: string[];
  }

  interface Company {
    org: string;
    url?: string;
    logo?: string;
    lightBg?: boolean;
    location?: string;
    roles: Role[];
  }

  const experience: Company[] = [
    {
      org: "Corvus Energy",
      url: "https://corvusenergy.com/",
      logo: logo("corvus"),
      lightBg: true,
      location: "Richmond, BC",
      roles: [
        {
          title: "Software Engineer, Systems",
          type: "Co-op",
          period: "Jan 2026 — Aug 2026",
          bullets: [],
        },
      ],
    },
    {
      org: "University of British Columbia",
      url: "https://ubc.ca/",
      logo: logo("ubc"),
      location: "Vancouver, BC",
      roles: [
        {
          title: "Software Engineer II",
          period: "Sept 2026 — Present",
          bullets: [],
        },
        {
          title: "Software Engineer I",
          period: "Sept 2024 — Dec 2025",
          bullets: [],
        },
      ],
    },
    {
      org: "Langara College",
      url: "https://langara.ca/",
      logo: logo("langara"),
      location: "Vancouver, BC",
      roles: [
        {
          title: "Teaching Assistant, Department of Computer Science",
          period: "May 2024 — Aug 2025",
          bullets: [],
        },
      ],
    },
    {
      org: "New Westminster Secondary School",
      url: "https://liemcomputing.ca/",
      logo: logo("nwss"),
      location: "New Westminster, BC",
      roles: [
        {
          title: "Lead Software Engineer",
          period: "Sept 2022 — Aug 2023",
          bullets: [],
        },
      ],
    },
  ];

  const initials = (name: String) =>
    name
      .split(" ")
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  let failed: Record<string, boolean> = $state({});
</script>

<svelte:head>
  <title>Porya Dashtipour — Experience</title>
</svelte:head>

{#snippet bulletList(items: string[])}
  {#if items?.length}
    <ul class="bullets">
      {#each items as b}<li>{b}</li>{/each}
    </ul>
  {/if}
{/snippet}

{#snippet orgName(job: Company)}
  {#if job.url}
    <a href={job.url} target="_blank" rel="noopener noreferrer">{job.org}</a>
  {:else}
    {job.org}
  {/if}
{/snippet}

<h2>Experience</h2>

{#each experience as job}
  <article class="item">
    <div class="logo" class:light={job.lightBg}>
      <span class="initials" aria-hidden="true">{initials(job.org)}</span>
      {#if job.logo && !failed[job.org]}
        <img
          src={job.logo}
          alt="{job.org} logo"
          onerror={() => (failed[job.org] = true)}
        />
      {/if}
    </div>

    <div class="body">
      {#if job.roles.length === 1}
        {@const r = job.roles[0]}
        <h3 class="org">{r.title}</h3>
        <div class="company">
          {@render orgName(job)}{#if r.type}<span class="dot">·</span
            >{r.type}{/if}
        </div>
        <div class="muted">
          {r.period}{#if job.location}<span class="dot">·</span
            >{job.location}{/if}
        </div>
        {@render bulletList(r.bullets)}
      {:else}
        <h3 class="org">{@render orgName(job)}</h3>
        {#if job.location}<div class="muted">{job.location}</div>{/if}

        <div class="roles multi">
          {#each job.roles as r}
            <div class="role-block">
              <h4 class="role">{r.title}</h4>
              <div class="muted">
                {r.period}{#if r.type}<span class="dot">·</span>{r.type}{/if}
              </div>
              {@render bulletList(r.bullets)}
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </article>
{/each}
