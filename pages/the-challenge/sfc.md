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

<v-click>

![Storybook stories body](/storybook-body.png){class="fixed inset-0 m-auto border-secondary border-2 w-[580px]"}

</v-click>

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