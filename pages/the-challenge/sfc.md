---
title: The challenge - SFC concept
level: 2
layout: intro
class: bg-indigo-950 text-center
transition: fade
---

<h1 class="!text-7xl">
The challenge - <strong>SFC</strong> concept
</h1>
<p class="!mt-6  font-serif text-3xl">
How do we help <logos-storybook-icon /> Storybook render stories<br>
from the <strong>compiled output</strong> of <logos-svelte-icon /> Svelte file?
</p>

---
title: The challenge - SFC concept
level: 3
layout: statement
class: bg-indigo-950 text-center
transition: fade
---

<p class="text-5xl">
We have to <strong>transform</strong> the compiled output.
</p>

<v-click>
<p class="!mt-8 font-serif text-4xl">
<logos-vitejs /> <a href="https://vite.dev/guide/api-plugin#transforming-custom-file-types">Vite <strong>Plugin API</strong></a> can help us with that.
</p>

<p class="!mt-10 text-3xl">
<logos-vitejs /> <a href="https://github.com/antfu-collective/vite-plugin-inspect"><code>vite-plugin-inspect</code></a>
</p>
</v-click>

---
title: The challenge - SFC - type-safety
level: 3
layout: center
class: bg-indigo-950
transition: slide-left
---

# Improved <logos-typescript-icon /> type-safety

```svelte {all|2|5}
<script module>
    const { Story } = defineMeta({ /* ... */ });
</script>

<Story name="Primary" args={{ primary: true }} />
```

<v-click>
<div class="shout-out font-serif text-3xl">

<twemoji-heart-hands /> Shout-out to:

1. <carbon-logo-twitter /> [@dummdidumm](https://x.com/dummdidumm_)
2. <carbon-logo-discord /> Motionless Train

</div>

</v-click>