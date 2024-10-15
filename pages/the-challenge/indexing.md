---
title: The Challenge - indexing
level: 2
layout: image-left
image: /storybook-sidebar.png
class: bg-pink-950 content-center
transition: fade
---

<div class="ml-2">

<h1 class="!text-4xl">
The Challenge - <strong>indexing</strong>
</h1>

<p class="text-xl !leading-snug font-serif">
How do we communicate to <logos-storybook-icon /> Storybook<br>
which stories are in <code>*.stories.svelte</code> file?
</p>

</div>

---
title: The Challenge - indexing - regular CSF exports
level: 2
layout: image-left
image: /storybook-sidebar.png
class: bg-pink-950
transition: fade
---

<h1 class="!text-xl !mb-2">
<logos-typescript-icon /> Regular CSF
</h1>

<<< @/snippets/regular-csf.stories.ts ts {all|8,9,11,14,16,20,22,24,26}

<v-click at="1">

<v-drag-arrow class="color-secondary" pos="504,475,-322,-23"/>
<v-drag-arrow class="color-secondary" pos="524,204,-364,85"/>
<v-drag-arrow class="color-secondary" pos="502,404,-296,0"/>

</v-click>

---
title: The Challenge - indexing - Svelte CSF
level: 2
layout: image-left
image: /storybook-sidebar.png
class: bg-pink-950
transition: fade
---

<h1 class="!text-xl !mb-2">
<logos-svelte-icon /> Svelte CSF
</h1>

<<< @/snippets/svelte-csf.stories.svelte svelte {all|9,10,12,15,18,19,21,23,24,26}

---
title: The Challenge - indexing - solution
level: 2
layout: image-left
image: /storybook-sidebar.png
class: bg-pink-950 content-center
transition: slide-left
---

<div class="ml-4">

<h1>
The Solution
</h1>

<div class="justify-self-center font-serif">

<v-clicks>

1. Hook into <logos-storybook-icon /> <a href="https://storybook.js.org/docs/api/main-config/main-config-indexers">Storybook <strong>indexer API</strong></a>,
2. Use `parse()` from <logos-svelte-icon /> `svelte/compiler` to get **AST**,
3. Statistically analyze each `*.stories.svelte` files<br>
   with <logos-npm-icon /> `zimmerframe`

</v-clicks>

</div>

</div>
