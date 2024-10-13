---
# Some information about your slides (markdown enabled)
title: Elevating the DX of using Storybook for Svelte
info: |
  How can you integrate Svelte's single-file components with Storybook's API that requires multiple named exports for stories?
  That's the question we'll answer for you in this talk.
  We've spent months rewriting the Storybook Svelte CSF Addon to support Svelte 5,
  and now we're ready to share our learnings with you.

  We'll give you a peek behind the scenes on how we're wrangling the Svelte compiler and Vite transformations,
  and why we needs to.

  We'll be parsing, walking and modifying ASTs.
  We'll show you how we're statically analysing your beautiful Svelte code and printing horrible outputs from it.
  All behind the scenes to improve the DX,
  allowing you to focus on the Svelte format you know and love.
author: Jeppe Reinhold & Mateusz Kadlubowski
download: true
# https://sli.dev/features/drawing
drawings:
  persist: false
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# take snapshot for each slide in the overview
overviewSnapshots: true
fonts:
  sans: Anton
  serif: Overpass
  mono: Fira Code
theme: ./theme
transition: fade
layout: intro
class: bg-summit text-center
---

<h1 class="text-6xl text-white">
Elevating <em class="underline">the DX</em><br>
<span class="text-secondary">of using</span> <logos-storybook-icon /> Storybook<br>
<span class="text-secondary">for</span> <logos-svelte-icon /> Svelte
</h1>

<p class="!mt-10 font-serif text-2xl">
<carbon-direct-link /> <a href="https://xeho91.github.io/svelte-summit-fall-2024">xeho91.github.io/svelte-summit-fall-2024</a>
</p>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
title: Presenter
level: 2
transition: slide-left
layout: center
class: bg-summit
---

<div class="flex flex-col items-center">

# Mateusz Kadlubowski

<p class="font-serif">
Full-stack Developer & <logos-storybook-icon /> <strong>Contributor</strong>
</p>

![Mateusz's Kadlubowski profile picture](https://avatars.githubusercontent.com/u/18627568){class="size-40 rounded-full border-secondary border-3 shadow-2xl shadow-secondary"}

- <carbon-logo-discord /> [@xeho91](https://discord.com/channels/@xeho91)
- <carbon-logo-github /> [@xeho91](https://github.com/xeho91)
- <carbon-logo-twitter /> [@xeho91](https://twitter.com/xeho91)

</div>

---
src: ./pages/introduction.md
---

---
src: ./pages/the-challenge.md
---

---
src: ./pages/takeaways.md
---
