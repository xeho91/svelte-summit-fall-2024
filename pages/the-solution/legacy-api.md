---
title: The Solution - Legacy API
level: 2
layout: center
class: bg-emerald-900
---

# The Solution


<p class="text-xl"><logos-storybook-icon /> <code>@storybook/addon-svelte-csf</code> <span class="text-secondary">legacy API</span></p>

<v-click>
<p>Shout-out to:</p>
</v-click>

<v-clicks at="2">

- [@BrittneyPostma](https://twitter.com/BrittneyPostma)
- [@PaoloRicciuti](https://twitter.com/PaoloRicciuti)

</v-clicks>

<v-click at="4">
<p>for their invaluable <span class="text-secondary">feedback</span> <twemoji-heart-hands /> !</p>
</v-click>

---
title: The Solution - Legacy API - statement
level: 3
layout: statement
class: bg-emerald-900
---

<p class="text-xl"><logos-svelte-icon /> <span class="text-secondary">maintainers</span> made their outstanding efforts to make Svelte 5 <span class="text-secondary">backwards compatible</span>.</p>

<v-click>
<p class="text-xl">So <span class="text-secondary">we</span> had to adopt this philosophy too.</p>
</v-click>

---
title: The Solution - Legacy API - plan
level: 3
transition: fade
layout: full
class: bg-emerald-900
---

# The plan seemed simple...

Codemods!

<v-clicks>

1. Use `parse()` from `svelte/compiler`
2. Use `zimmerframe` for walking on AST & modification
3. Use ❓❔❓❔❓❔❓❔  to print transformed legacy to modern...

</v-clicks> 

<v-click at="4">
<p class="text-5xl">Bummer!</p>
</v-click>

---
title: The Solution - Legacy API - plan - svelte-ast-print
level: 4
transition: fade
layout: statement
class: bg-emerald-900
---

<p class="text-3xl"><twemoji-sparkles /> Birth of <logos-npm-icon /><code>svelte-ast-print</code></p>

<v-click>
<p class="text-xl">
Still in early stages, and it doesn't support <logos-typescript-icon /><span class="text-secondary">TypeScript</span> syntax... yet.
</p>
</v-click>

<v-click class="">

Shout-out to [@manuel3108](https://github.com/manuel3108) <twemoji-heart-hands /> for making efforts to bring it on <logos-npm-icon />`esrap`

</v-click>

---
title: The Solution - Legacy API - plan - no TypeScript
level: 4
transition: fade
layout: statement
class: bg-emerald-900
---

<p class="text-3xl">No <logos-typescript-icon /><code>TypeScript</code> support means...</p>

<v-click>
<p>no <span class="line-through text-secondary">codemods</span>, at least for now.</p>
</v-click>

<v-click>
<p class="text-3xl">What we could do instead?</p>
</v-click>

<v-click>
<p class="text-xl">Create <logos-vitejs />Vite <code>pre-transform</code> <span class="text-secondary">plugin</span>.</p>
</v-click>

---
title: The Solution - Legacy API - changes - meta
level: 4
transition: slide-up
layout: full
class: bg-emerald-900
---

# Transforming `meta` to `defineMeta()`


<div class="grid auto-flow-col gap-col-10">

<div>

````md magic-move
```svelte {all|2|6-22|2,6,22}
<script context="module" lang="ts">
    import { type Meta, Story } from "@storybook/addon-svelte-csf";

    import Button from "./Button.svelte";

    export const meta = {
        component: Button,
        title: 'Atom/Button',
        tags: ['autodocs'],
        args: {
            children: 'Click me',
            onclick: onclickFn,
        },
        argTypes: {
            backgroundColor: { control: 'color' },
            size: {
                control: { type: 'select' },
                options: ['small', 'medium', 'large'],
            },
            children: { control: 'text' },
        },
    } satisfies Meta<Button>;
</script>
```
```svelte {2,6,22|1}
<script context="module" lang="ts">
    import { defineMeta } from "@storybook/addon-svelte-csf";

    import Button from "./Button.svelte";

    const { Story } = defineMeta({
        component: Button,
        title: 'Atom/Button',
        tags: ['autodocs'],
        args: {
            children: 'Click me',
            onclick: onclickFn,
        },
        argTypes: {
            backgroundColor: { control: 'color' },
            size: {
                control: { type: 'select' },
                options: ['small', 'medium', 'large'],
            },
            children: { control: 'text' },
        },
    });
</script>
```
```svelte {1}
<script context="module">
    import { defineMeta } from "@storybook/addon-svelte-csf";

    import Button from "./Button.svelte";

    const { Story } = defineMeta({
        component: Button,
        title: 'Atom/Button',
        tags: ['autodocs'],
        args: {
            children: 'Click me',
            onclick: onclickFn,
        },
        argTypes: {
            backgroundColor: { control: 'color' },
            size: {
                control: { type: 'select' },
                options: ['small', 'medium', 'large'],
            },
            children: { control: 'text' },
        },
    });
</script>
```
````

</div>

<section>
<div>

<v-clicks>

- <logos-typescript-icon /> Type-safety is still there<twemoji-thumbs-up />
- `Story` component is <span class="text-secondary">generic</span> and benefits from type-safety too! <twemoji-sparkles />

</v-clicks>

</div>

<div class="mt-10">

<v-click>

<twemoji-heart-hands/> Shout-out for help and inspiration:

</v-click>

<v-clicks>

- [@dummdidumm](https://twitter.com/@dummdidumm_)
- MotionlessTrain from <logos-discord-icon /> Discord

</v-clicks>

</div>
</section>

</div>

---
title: The Solution - Legacy API - changes - Story slots
level: 4
transition: slide-up
layout: center
class: bg-emerald-900
---

# Transforming `Story` slots

````md magic-move
```svelte {all|1,3}
<Story name="Default" let:args let:context>
    <Button {...args} />
</Story>
```
```svelte {2,4}
<Story name="Default">
    {#snippet children(args, context)}
        <Button {...args} />
    {/snippet}
</Story>
```
````

<v-click>

[<logos-svelte-icon /> <span class="text-secondary">snippets</span>](https://svelte-5-preview.vercel.app/docs/snippets) are indeed flexible!


</v-click>

---
title: The Solution - Legacy API - changes - Template to snippets
level: 4
transition: slide-up
layout: center
class: bg-emerald-900
---

# Transforming `Template` component

````md magic-move
```svelte {all|1,3}
<Template let:args>
    <Button {...args}>Click me</Button>
</Template>

<Story name="Default" args={{ size: "medium" }} />
```
```svelte {1,3}
{#snippet template(args)}
    <Button {...args}>Click me</Button>
{/snippet}

<Story name="Default" args={{ size: "medium" }} />
```
```svelte {5}
{#snippet template(args)}
    <Button {...args}>Click me</Button>
{/snippet}

<Story name="Default" args={{ size: "medium" }} children={template} />
```
```svelte {2-4|1,5}
<Story name="Default" args={{ size: "medium" }} children={template}>
    {#snippet children(args)}
        <Button {...args}>Click me</Button>
    {/snippet}
</Story>
```
```svelte {1,5|all}
<Story name="Default" args={{ size: "medium" }}>
    {#snippet children(args)}
        <Button {...args}>Click me</Button>
    {/snippet}
</Story>
```
```svelte
<Story name="Default" args={{ size: "medium" }} />
```
````

<v-click at="3">

We no longer need a `Template` component, so it got [depreacted]{class="text-secondary"}.

</v-click>

<v-click at="7">

<twemoji-light-bulb /> It’s also [no longer required]{class="text-secondary"} to define a template.

</v-click>

<v-click at="9">

Stories without templates will just render the component with `args` [becoming props]{class="text-secondary"}.

</v-click>

---
title: The Solution - Legacy API - changes - setTemplate
level: 4
transition: slide-up
layout: center
class: bg-emerald-900
---

# DRY - `setTemplate`

````md magic-move
```svelte {all|8-10,14-16,20-22}{lines:true}
<script context="module">
    import { defineMeta } from "@storybook/addon-svelte-csf";
  
    const { Story } = defineMeta(...);
</script>

<Story name="Small" args={{ size: "small" }}>
    {#snippet children(args)}
        <Button primary {...args}>Click me</Button>
    {/snippet}
</Story>

<Story name="Medium" args={{ size: "medium" }}>
    {#snippet children(args)}
        <Button primary {...args}>Click me</Button>
    {/snippet}
</Story>

<Story name="Large" args={{ size: "large" }}>
    {#snippet primary children(args)}
        <Button {...args}>Click me</Button>
    {/snippet}
</Story>
```
```svelte {6-9}
<script context="module">
    import { defineMeta } from "@storybook/addon-svelte-csf";

    const { Story } = defineMeta(...);
</script>

{#snippet sharedTemplate(args)}
    <Button primary {...args}>Click me</Button>
{/snippet}

<Story name="Small" args={{ size: "small" }} />

<Story name="Medium" args={{ size: "medium" }} />

<Story name="Large" args={{ size: "large" }} />
```
```svelte {11,13,15}
<script context="module">
    import { defineMeta } from "@storybook/addon-svelte-csf";

    const { Story } = defineMeta(...);
</script>

{#snippet sharedTemplate(args)}
    <Button primary {...args}>Click me</Button>
{/snippet}

<Story name="Small" args={{ size: "small" }} children={sharedTemplate} />

<Story name="Medium" args={{ size: "medium" }} children={sharedTemplate} />

<Story name="Large" args={{ size: "large" }} children={sharedTemplate} />
```
```svelte {2}
<script context="module">
    import { defineMeta, setTemplate } from "@storybook/addon-svelte-csf";

    const { Story } = defineMeta(...);
</script>

{#snippet sharedTemplate(args)}
    <Button primary {...args}>Click me</Button>
{/snippet}

<Story name="Small" args={{ size: "small" }} children={sharedTemplate} />

<Story name="Medium" args={{ size: "medium" }} children={sharedTemplate} />

<Story name="Large" args={{ size: "large" }} children={sharedTemplate} />
```
```svelte {7-9|15,17,19}
<script context="module">
    import { defineMeta, setTemplate } from "@storybook/addon-svelte-csf";

    const { Story } = defineMeta(...);
</script>

<script>
    setTemplate(sharedTemplate);
</script>

{#snippet sharedTemplate(args)}
    <Button primary {...args}>Click me</Button>
{/snippet}

<Story name="Small" args={{ size: "small" }} children={sharedTemplate} />

<Story name="Medium" args={{ size: "medium" }} children={sharedTemplate} />

<Story name="Large" args={{ size: "large" }} children={sharedTemplate} />
```
```svelte {15,17,19}{lines:true}
<script context="module">
    import { defineMeta, setTemplate } from "@storybook/addon-svelte-csf";

    const { Story } = defineMeta(...);
</script>

<script>
    setTemplate(sharedTemplate);
</script>

{#snippet sharedTemplate(args)}
    <Button primary {...args}>Click me</Button>
{/snippet}

<Story name="Small" args={{ size: "small" }} />

<Story name="Medium" args={{ size: "medium" }} />

<Story name="Large" args={{ size: "large" }} />
```
````

---
title: The Solution - Legacy API - changes - 3 ways
level: 4
transition: fade
layout: statement
class: bg-emerald-900
---

<v-clicks>

Now, we have...

[3]{class="text-8xl color-secondary"}

... ways to set a template!

Which proves the [flexibility]{class="text-secondary"} of [<logos-svelte-icon /> snippets](https://svelte-5-preview.vercel.app/docs/snippets).

<p class="text-8xl">
    <logos-storybook-icon/> <twemoji-handshake /> <logos-svelte-icon />
</p>

</v-clicks>

---
title: The Solution - Legacy API - breaking changes
level: 3
transition: fade
layout: statement
class: bg-emerald-900
---

<v-clicks>

That's plenty of [breaking changes]{class="color-secondary"}, including some small deprecations.

[<logos-github-icon /> RFC: Svelte 5 support](https://github.com/storybookjs/addon-svelte-csf/discussions/191)

So... about the [legacy API support]{class="color-secondary"}...
</v-clicks>

---
title: The Solution - Legacy API - opt-in
level: 3
transition: fade
layout: center
class: bg-emerald-900
---

Is now [opt-in]{class="color-secondary"}.

<v-clicks>

````md magic-move
```ts {all|6-9|8}{lines:true}
// .storybook/main.ts
import type { StorybookConfig } from "@storybook/svelte-vite";

const config: StorybookConfig = {
    // ...
    addons: [
        // other addons
        "@storybook/addon-svelte-csf",
    ],
    // ...
};

export default config;
```
```ts {8-13}{lines:true}
// .storybook/main.ts
import type { StorybookConfig } from "@storybook/svelte-vite";

const config: StorybookConfig = {
    // ...
    addons: [
        // other addons
        {
            "@storybook/addon-svelte-csf"
            options: {
                legacyTemplate: true,
            }
        },
    ],
    // ...
};

export default config;
```
````

</v-clicks>

---
title: The Solution - Legacy API - how it works?
level: 3
transition: fade
layout: two-cols
class: bg-emerald-900
---

# How does it work?

<v-clicks>

We created a <logos-vitejs /> Vite `pre-transform` plugin which gets enabled when `legacySupport: true`.

</v-clicks>


::right::

<v-clicks>

![Vite's plugin inspect transform stack](/vite-transform-stack.png)

<div>
<v-drag-arrow class="text-secondary" pos="395,150,90,0"/>
<div class="fixed top-[130px] left-[490px] w-[435px] h-[38px] bg-secondary bg-op-10 border-2 border-solid border-secondary"></div>
</div>

</v-clicks>

---
title: The Solution - Legacy API - how it works? - code
level: 4
transition: fade
layout: full
class: bg-emerald-900
---

# Implementation code

````md magic-move
```ts
export const viteFinal: StorybookConfig['viteFinal'] = async (config) => {
    let { plugins = [], ...restConfig } = config;

    plugins.push(await postTransformPlugin());

    return {
        ...restConfig,
        plugins,
    };
};
```
```ts {3}
export const viteFinal: StorybookConfig['viteFinal'] = async (
    config,
    options: StorybookAddonSvelteCsfOptions
) => {
    let { plugins = [], ...restConfig } = config;

    plugins.push(await postTransformPlugin());

    return {
        ...restConfig,
        plugins,
    };
};
```
```ts {6}
export const viteFinal: StorybookConfig['viteFinal'] = async (
    config,
    options: StorybookAddonSvelteCsfOptions
) => {
    let { plugins = [], ...restConfig } = config;
    const { legacyTemplate = false } = options;

    plugins.push(await postTransformPlugin());

    return {
        ...restConfig,
        plugins,
    };
};
```
```ts {8-10}
export const viteFinal: StorybookConfig['viteFinal'] = async (
    config,
    options: StorybookAddonSvelteCsfOptions
) => {
    let { plugins = [], ...restConfig } = config;
    const { legacyTemplate = false } = options;

    if (legacyTemplate) {
        plugins.unshift(await preTransformPlugin());
    }
    plugins.push(await postTransformPlugin());

    return {
        ...restConfig,
        plugins,
    };
};
```
````

---
title: The Solution - Legacy API - how it works? - what it does?
level: 4
transition: fade
layout: full
class: bg-emerald-900
---

# What it does behind the scenes?

<v-clicks>

1. Uses [`parse()`](https://svelte.dev/docs/svelte-compiler#parse) from [`svelte-compiler`](https://svelte.dev/docs/svelte-compiler) to get the [AST]{class="text-secondary"}
2. Uses [<logos-npm-icon /> `zimmerframe`](https://github.com/rich-harris/zimmerframe) to [walk]{class="text-secondary"} on AST and [modify]{class="text-secondary"} it
2. Uses [<logos-npm-icon /> `svelte-ast-print`](https://github.com/xeho91/svelte-ast-print) to [print]{class="text-secondary"} the modified AST
</v-clicks>


---
title: The Solution - Legacy API - how it works? - preview
level: 4
transition: fade
layout: image
class: bg-emerald-900
---

# Example preview

![Vite's plugin pre-transform example](/vite-pre-transform-example.png)