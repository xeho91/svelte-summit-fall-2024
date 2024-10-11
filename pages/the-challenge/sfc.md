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
title: The challenge - solution
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
</v-click>

<v-click>
<p class="!mt-16 text-3xl">
<logos-vitejs /> <a href="https://github.com/antfu-collective/vite-plugin-inspect"><code>vite-plugin-inspect</code></a>
</p>
</v-click>

---
title: The challenge - SFC - wrong approach
level: 3
layout: center
class: bg-indigo-950
transition: fade
---

<h1 class="!mb-10">
You might have thought of it...
</h1>

````md magic-move
```svelte
<Story
    name="Primary"
    args={{ primary: true }}
/>
```
```js
export const Primary = {
    args: { primary: true },
};
```
````
<v-click>

<twemoji-cross-mark class="fixed top-[210px] left-[430px] text-8xl" />

<p class="!mt-12 font-serif text-3xl text-center">
This is <strong>NOT</strong> the way.
</p>
</v-click>

---
title: The challenge - SFC - type-safety
level: 3
layout: center
class: bg-indigo-950
transition: slide-left
---

<twemoji-shortcake  class="justify-self-center block mb-12 text-4xl" />

# Improved <logos-typescript-icon /> type-safety

```svelte {all|2|5}
<script module>
    const { Story } = defineMeta({ /* ... */ });
</script>

<Story name="Primary" args={{ primary: true }} />
```

<v-click>
<div class="shout-out mt-10 font-serif text-3xl">

<twemoji-heart-hands /> Shout-out to:

1. <carbon-logo-twitter /> [@dummdidumm](https://x.com/dummdidumm_)
2. <carbon-logo-discord /> MotionlessTrain

</div>

</v-click>