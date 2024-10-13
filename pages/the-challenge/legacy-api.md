---
title: The challenge - backwards compatibility
level: 2
layout: center
class: bg-lime-950 text-start
---

<h1 class="!text-5xl text-start">
The Challenge - <strong>backwards compatiblity</strong>
</h1>

<p class="!mt-4 font-serif !text-3xl">
How did we adopt this philosophy to <strong>support legacy API</strong>?
</p>

<div class="mt-10 font-serif text-xl">
<p>
<twemoji-heart-hands /> Shout-out to:
</p>

- <carbon-logo-twitter /> [@BrittneyPostma](https://twitter.com/BrittneyPostma)
- <carbon-logo-twitter /> [@PaoloRicciuti](https://twitter.com/PaoloRicciuti)

for their invaluable feedback!

</div>

---
title: The challenge - backwards compatiblity - svelte-ast-print
level: 3
layout: statement
class: bg-lime-950
transition: fade
---

<v-click>
<h1>
<twemoji-sparkles /> Birth of <logos-npm-icon /><code>svelte-ast-print</code>
</h1>
</v-click>

<v-click>
<p class="!mt-10 font-serif text-3xl">
Still in early stages, and it <span class="decoration-underline decoration-secondary">doesn't support</span> <logos-typescript-icon /><strong class="text-secondary">TypeScript</strong> syntax... yet.
</p>
</v-click>

<v-click>
<p class="font-serif text-3xl">
<twemoji-heart-hands /> Shout-out to <a href="https://github.com/manuel3108">@manuel3108</a> for working on it.
</p>

</v-click>

---
title: The challenge - backwards compatiblity - opt-in
level: 3
layout: center
class: bg-lime-950
transition: slide-left
---

<p class="text-3xl">
Legacy support is now <strong>opt-in</strong>.
</p>

````md magic-move
```ts {all|6-9|8}
// .storybook/main.ts

import type { StorybookConfig } from "@storybook/svelte-vite";

const config = {
    // ...
    addons: [
        // ... other addons
        "@storybook/addon-svelte-csf",
    ],
    // ...
} satisfies StorybookConfig;

export default config;
```
```ts {8-13}
// .storybook/main.ts

import type { StorybookConfig } from "@storybook/svelte-vite";

const config = {
    // ...
    addons: [
        // ... other addons
        {
            "@storybook/addon-svelte-csf"
            options: {
                legacyTemplate: true,
            }
        },
    ],
    // ...
} satisfies StorybookConfig;

export default config;
```
````