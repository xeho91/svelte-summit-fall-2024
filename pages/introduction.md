---
title: Introduction - Storybook
level: 2
transition: fade
layout: full
class: bg-sky-950
---

# **What** is <logos-storybook-icon /> Storybook?

---
title: Introduction - Storybook - Svelte 5 support
level: 3
layout: full
class: px-10 bg-sky-950 flex flex-row justify-end gap-col-10
---

<div id="left" class="flex flex-col justify-center">
<v-clicks>

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

</v-clicks>
</div>

<div id="right">

```ts
// Button.stories.ts

import type { Meta, StoryObj } from '@storybook/svelte';
import { fn } from '@storybook/test';

import Button from './button.svelte';

const meta = {
    title: 'Atom/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { onclick: fn() },
} satisfies Meta<Button>;

export default meta;

type Story = StoryObj<Button>;

export const Primary: Story = {
  args: { label: 'Button', primary: true },
};

export const Small: Story = {
    args: { label: 'Button', size: 'small' },
};
```

</div>

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

<v-click at="1" hide>
<p class="!text-5xl">
<logos-typescript-icon /> Regular CSF
</p>
</v-click>

<v-click at="1" show>
<p class="!text-5xl">
<logos-svelte-icon /> Svelte CSF
</p>
</v-click>

</div>

<div id="left" class="self-center justify-self-end w-fit">

````md magic-move
```ts
// Button.stories.ts

import type { Meta, StoryObj } from '@storybook/svelte';
import { fn } from '@storybook/test';

import Button from './button.svelte';

const meta = {
    title: 'Atom/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { onclick: fn() },
} satisfies Meta<Button>;

export default meta;

type Story = StoryObj<Button>;

export const Primary: Story = {
  args: { label: 'Button', primary: true },
};

export const Small: Story = {
    args: { label: 'Button', size: 'small' },
};
```
```svelte
<!-- Button.stories.svelte -->

<script context="module">
    import { defineMeta } from '@storybook/addon-svelte-csf';
    import { fn } from '@storybook/test';

    import Button from './button.svelte';

    export const { Story } = defineMeta({
        title: 'Atom/Button',
        component: Button,
        tags: ['autodocs'],
        argTypes: {
            backgroundColor: { control: 'color' },
        },
        args: { onclick: fn() },
    });
</script>

<Story
    name="Primary"
    args={{ label: 'Button', primary: true }}
/>

<Story
    name="Small"
    args={{ label: 'Button', size: 'small' }}
/>
```
````

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
What are this addon <strong>challenges</strong> to make it work<br>
and <strong>bridge the gap</strong> with regular CSF.
</p>