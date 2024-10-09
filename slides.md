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
level: 2
title: Presenters
layout: two-cols
class: bg-summit
transition: slide-left
---

<div class="h-full flex flex-col items-center justify-center">

# Jeppe Reinhold

<img
    alt="Jeppe's Reinhold profile picture"
    src="https://avatars.githubusercontent.com/u/5678122?v=4"
    class="size-40 rounded-3xl border-secondary border-3 shadow-xl shadow-secondary"
/>

<p class="text-secondary"><logos-storybook-icon /> Storybook & <logos-chromatic-icon /> Chromatic</p>

<ul>
    <li>
        <a
            href="https://github.com/JReinhold"
            class="!hover:text-secondary"
        >
            <carbon-logo-github /> @JReinhold
        </a>
    </li>
    <li>
        <a
            href="https://twitter.com/DrReinhold"
            class="!hover:text-secondary"
        >
            <carbon-logo-twitter /> @DrReinhold
        </a>
    </li>
</ul>

</div>

::right::

<div class="h-full flex flex-col items-center justify-center">

# Mateusz Kadlubowski

<img
    alt="Mateusz's Kadlubowski profile picture"
    src="https://avatars.githubusercontent.com/u/18627568?v=4"
    class="size-40 rounded-3xl border-secondary border-3 shadow-2xl shadow-secondary"
/>

<p class="text-secondary"><logos-storybook-icon /> Contributor</p>

<ul>
    <li>
        <a
            href="https://github.com/xeho91"
            class="!hover:text-secondary"
        >
            <carbon-logo-github /> @xeho91
        </a>
    </li>
    <li>
        <a
            href="https://twitter.com/xeho91"
            class="!hover:text-secondary"
        >
            <carbon-logo-twitter /> @xeho91
        </a>
    </li>
</ul>

</div>

---
src: ./pages/introduction.md
---

---
src: ./pages/the-problem.md
---

---
src: ./pages/the-solution.md
---

---
src: ./pages/takeaways.md
---
