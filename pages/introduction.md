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
class: bg-sky-950 flex flex-row space-evenly align-center gap-col-10
---

<div id="left" class="flex flex-col justify-center">
<v-clicks>

<p class="text-center text-3xl !leading-snug">
<logos-storybook-icon /> Storybook <strong>regular CSF</strong><br>
already has a support<br>
for <logos-svelte-icon /> Svelte 5.
</p>

<p>
    <a href="https://storybook.js.org/docs/api/csf" target="_blank">
    <carbon-direct-link /> <twemoji-backhand-index-pointing-right /> More on <strong>CSF</strong> - Component Story Format <twemoji-backhand-index-pointing-left />
    </a>
</p>

<p>
    <a href="https://storybook.js.org/docs/api/csf" target="_blank">
    <carbon-direct-link /> <twemoji-backhand-index-pointing-right /> More on <strong>how to set up stories</strong> <twemoji-backhand-index-pointing-left />
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

<style>
    strong {
        @apply text-secondary;
    }
</style>

---
title: Introduction - Storybook - Svelte CSF addon intro
level: 3
transition: fade
layout: statement
class: bg-sky-950
---


<p class="text-4xl">
Meet <a href="https://github.com/storybookjs/addon-svelte-csf"><logos-storybook-icon /> <code>@storybook/addon-svelte-csf</code></a>
</p>

<v-clicks>

<p class="!mt-8 text-4xl">
Write stories using <logos-svelte-icon /> Svelte syntax - aka <span color="secondary">Svelte CSF</span>.
</p>

<p class="!mt-12 text-6xl">
Now, it <span class="color-secondary">supports</span> <logos-svelte-icon /> <span class="decoration-underline">Svelte <span class="text-8xl color-secondary">5</span></span>.
</p>

<p class="!mt-4 text-3xl">
<code>pnpm install @storybook/addon-svelte-csf@next</code>
</p>

</v-clicks>

---
title: Introduction - Storybook - Svelte CSF addon intro - meta
level: 4
transition: fade
layout: full
class: bg-sky-950 p-4 flex flex-row-reverse gap-col-12 justify-end
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

<Story name="Primary" args={{ label: 'Button', primary: true }} />

<Story name="Small" args={{ label: 'Button', size: 'small' }} />
```
````

</div>

---
title: Introduction - Storybook - Svelte CSF addon - how it works?
level: 3
transition: fade
layout: statement
class: bg-sky-950
---

<p class="text-8xl">
<strong>How</strong> it works?
</p>

<style>
    strong {
        @apply text-secondary;
    }
</style>