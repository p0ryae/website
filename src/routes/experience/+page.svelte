<script lang="ts">
  import "./style.css";
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
          bullets: [
            "Built a Nix-based OS for BMS Pack Controllers",
            "Created an atomic A/B OTA pipeline with golden rollback",
            "Engineered an Azure Elixir/OTP IoT edge runtime over MQTT",
            "Added a ratatui TUI to the BMS CLI, cutting MTTR by 45%",
            "Cut validation time 65% with a QEMU-based test suite",
          ],
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
          bullets: [
            "Shipped 15+ features in a React Native and Expo app",
            "Cut load time 35% with lazy-loaded navigation",
          ],
        },
        {
          title: "Software Engineer I",
          period: "Sept 2024 — Dec 2025",
          bullets: [
            "Built full-stack apps with React, Node.js and MongoDB",
            "Cut deploy time 45% with a Turborepo monorepo",
            "Reached 87% coverage with Jest, Playwright and Docker",
            "Integrated SAML2 and OAuth 2.0 campus authentication",
          ],
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
          title: "Teaching Assistant",
          period: "May 2024 — Aug 2025",
          bullets: [
            "Assisted in teaching foundational course covering core Object-Oriented Programming (OOP) concepts using Java",
            "Supported upper-level courses including CPSC 4800 and CPSC 4810 focused on data processing and analytics",
          ],
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
      <h3 class="org">
        {#if job.url}
          <a href={job.url} target="_blank" rel="noopener noreferrer"
            >{job.org}</a
          >
        {:else}
          {job.org}
        {/if}
      </h3>
      {#if job.location}<div class="muted">{job.location}</div>{/if}

      <div class="roles" class:multi={job.roles.length > 1}>
        {#each job.roles as r}
          <div class="role-block">
            <h4 class="role">{r.title}</h4>
            <div class="muted">
              {r.period}{#if r.type}<span class="dot">·</span>{r.type}{/if}
            </div>

            {#if r.bullets?.length}
              <ul class="bullets">
                {#each r.bullets as b}<li>{b}</li>{/each}
              </ul>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </article>
{/each}
