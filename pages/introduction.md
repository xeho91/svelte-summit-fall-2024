---
title: Introduction - Storybook
level: 2
transition: fade
layout: center
class: bg-sky-950 p-6
---

<h1 class="mt-4">
<strong>What</strong> is <logos-storybook-icon /> Storybook?
</h1>

<div class="flex flex-row gap-col-4">
<div class="">

![Storybook preview](/storybook-preview.png){class="w-[950px] border-secondary border-2"}

</div>

<div>
<p class="text-2xl !leading-snug">
A frontend tool for <strong>building UI components</strong> faster and easier.
</p>

<div class="font-serif text-xl">

- **sandbox** to build components<br> [in isolation]{class="decoration-underline"},
- **catalog** all components and states,
- has a big and **thriving community**.

</div>
</div>
</div>

<p class="text-2xl">
<a>
<carbon-direct-link /> Mealdrop "real-world" Storybook example by Yann Braga
</a>
</p>

<!--
Is a tool which enables having a productive,

collaborative workshop for developers and also designers.

To develop, document, test UI components and pages.

In isolation.

Meaning I don't need to run the whole app architecture,
nor worry about the business logic to start working on particular UI element.

Inside the Storybook I can cover **every possible** visual edge case and have ability to write tests for them.
-->

---
title: Introduction - Storybook - latest feature
level: 3
transition: fade
layout: iframe-left
url: https://www.youtube.com/embed/mWK3Y_1kmaM?si=ig0DtJk2QGLqe1vj
class: bg-sky-950
---

<div class="ml-8 h-full flex flex-col justify-center">
<h1 class="!leading-snug">
<strong>Component Testing</strong><br>
with <logos-storybook-icon /> Storybook<br>
and <logos-vitest /> Vitest 
</h1>
<p class="font-serif">by Yann Braga</p>
</div>

<!--
Storybook has also rich ecosystem.

If you have had a chance to watch ViteConf this month, where Yann from Storybook core team made a talk about recent integration with Vitest.

I don't know about you… but it got me very excited.

That’s because I can finally include stories tests

in my favourite testing framework

without need to host Storybook instance!
-->

---
title: Introduction - Storybook - Svelte 5 support
level: 3
layout: full
class: px-10 bg-sky-950 flex flex-row justify-end gap-col-10
---

<div id="left" class="flex flex-col self-center">

<p class="text-center text-4xl !leading-snug">
<logos-storybook-icon /> Storybook <strong>regular CSF</strong><br>
already has a support<br>
for <logos-svelte-icon /> Svelte 5.
</p>

<p font="serif">
    <a href="https://storybook.js.org/docs/api/csf" target="_blank">
    <carbon-direct-link /> More on <strong>CSF</strong> - Component Story Format
    </a>
</p>

<p font="serif">
    <a href="https://storybook.js.org/docs/api/csf" target="_blank">
    <carbon-direct-link /> More on <strong>how to set up stories</strong>
    </a>
</p>
</div>

<div id="right" class="self-center">
<<< @/snippets/regular-csf.stories.ts ts
</div>

<v-click>

![Example preview](/example-preview.png){class="fixed inset-0 m-auto w-[900px] border-secondary border-2"}

</v-click>

---
title: Introduction - Storybook - challenges
level: 3
transition: fade
layout: full
class: bg-sky-950 p-12 flex flex-col justify-center
---

<div class="self-center">
<h1 class="!text-6xl">
It comes with <strong>challenges</strong>:
</h1>

<v-clicks>

1. <strong>Regular CSF</strong> is pure <logos-javascript /> JavaScript,
2. <logos-storybook-icon /> Storybook <span class="decoration-underline decoration-secondary decoration-offset-4">doesn’t understand</span>
   <br>the <logos-svelte-icon /> Svelte language natively.

</v-clicks>
</div>

<style>
    li {
        @apply font-serif;
        @apply text-4xl;
        @apply leading-snug;
    }
    li:first-of-type {
        @apply mt-8;
    }
    li:not(:first-of-type) {
        @apply mt-4;
    } 
</style>

---
title: Introduction - Storybook Svelte CSF
level: 2
transition: fade
layout: cover
class: bg-sky-950 justify-center
---

<p class="text-4xl">
Meet <a href="https://github.com/storybookjs/addon-svelte-csf"><logos-storybook-icon /> <code>@storybook/addon-svelte-csf</code></a>
</p>

<v-clicks>

<p class="!mt-8 font-serif text-4xl">
Write stories using <logos-svelte-icon /> Svelte syntax - aka <span color="secondary">Svelte CSF</span>.
</p>

</v-clicks>

---
title: Introduction - Storybook Svelte CSF
level: 3
transition: fade
layout: full
class: px-10 bg-sky-950 flex flex-row gap-col-12 justify-end
---

<div id="right" class="self-center">

<v-click>

<p class="!text-2xl">
<logos-svelte-icon /> Svelte CSF
</p>

<<< @/snippets/svelte-csf.stories.svelte svelte
</v-click>


</div>

<div id="left" class="self-center justify-self-end w-fit">

<p class="!text-2xl">
<logos-typescript-icon /> Regular CSF
</p>

<<< @/snippets/regular-csf.stories.ts ts

</div>

---
title: Introduction - Storybook Svelte CSF - Why?
level: 3
transition: fade
layout: full
class: bg-sky-950 p-12 flex flex-col justify-center
---

<div class="self-center">
<h1 class="!text-7xl"><strong>Why</strong>?</h1>

<v-clicks>

1. **Flexibility** - support <logos-svelte-icon /> Svelte syntax<br>
   _e.g. blocks: `{#each}`, `{#if}`, `{#await}`_
2. **Leverage <logos-svelte-icon /> Svelte features** - reactivity, etc.

</v-clicks>

<style>
    li {
        @apply font-serif;
        @apply text-4xl;
        @apply leading-snug;
    }
    li:first-of-type {
        @apply mt-8;
    }
    li:not(:first-of-type) {
        @apply mt-4;
    } 
</style>

</div>

---
title: Introduction - Storybook Svelte CSF - refactor
level: 3
transition: fade
layout: statement
class: bg-sky-950
---

<h1>
About <logos-svelte-icon /> Svelte <strong>5</strong>...
</h1>

<v-click>

<div class="flex flex-row gap-col-4 justify-center">

![Jeppe Reinhold profile picture](https://avatars.githubusercontent.com/u/5678122){class="h-50 rounded-full"}

![Mateusz Kadlubowski profile picture](https://avatars.githubusercontent.com/u/18627568){class="h-50"}

</div>

<p class="!mt-8 font-serif text-3xl">
We did <twemoji-recycling-symbol /> <strong>ground refactor</strong> to support it and fit better it's paradigm.
</p>
</v-click>

---
title: Introduction - Storybook Svelte CSF - How?
level: 3
transition: slide-left
layout: statement
class: bg-sky-950
---

<h1 class="!text-8xl">
<strong>How</strong> it works?
</h1>

<p class="font-serif text-2xl !leading-relaxed">
What are this addon <strong>challenges</strong> to make it possible<br>
and <strong>bridge the gap</strong> with regular CSF.
</p>
