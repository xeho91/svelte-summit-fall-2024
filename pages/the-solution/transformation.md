---
title: The Solution - Transformation
level: 2
transition: slide-up
layout: intro
class: bg-emerald-900
---

# The solution

Transformation

---
title: The Solution - Transformation - plan
level: 3
transition: slide-up
layout: full
class: bg-emerald-900
---

# <carbon-chemistry /> Ingredients

<v-clicks>

1. <logos-svelte-icon /> `parse()` from <logos-svelte-icon /> `svelte/compiler`
2. <logos-npm-icon /> `zimmerframe` for walking on the <logos-svelte-icon /> Svelte AST
3. <logos-vitejs /> `@sveltejs/vite-plugin-svelte` to compile <logos-svelte-icon /> to <logos-javascript />
4. <logos-javascript /> `parse()` from <logos-rollup /> `rollup`
5. <logos-npm-icon /> `zimmerframe` for walking on the <logos-javascript /> JavaScript AST (ESTree) & modification
6. <logos-npm-icon /> `magic-string` for source-maps
7. <logos-npm-icon /> `esrap` to print modified <logos-javascript /> JavaScript AST

Can you guess already [who is the mastermind]{class="text-secondary"} behind most of those packages?

Yes, [@Rich-Harris](https://twitter.com/Rich_Harris).

</v-clicks>

---
title: The Solution - Transformation - export default
level: 3
transition: slide-up
layout: full
class: bg-emerald-900
---

# Transforming `default` export

````md magic-move
```js {all|21}
// COMPILED: Button.stories.svelte

import "svelte/internal/disclose-version";

$.mark_module_start();
// ...

import * as $ from "svelte/internal/client";
import { defineMeta } from "@storybook/addon-svelte-csf";
import { fn } from "@storybook/test";
import Button from "./components/Button.svelte";

const onclickFn = fn().mockName("onclick");

const { Story } = defineMeta({ /* ... */ });

function Button_stories($$anchor, $$props) {
  // ...
}

export default Button_stories;

$.mark_module_end(Button_stories);
```

```js {22|all|15}
// COMPILED: Button.stories.svelte

import "svelte/internal/disclose-version";

$.mark_module_start();
// ...

import * as $ from "svelte/internal/client";
import { defineMeta } from "@storybook/addon-svelte-csf";
import { fn } from "@storybook/test";
import Button from "./components/Button.svelte";

const onclickFn = fn().mockName("onclick");

const { Story } = defineMeta({ /* ... */ });

function Button_stories($$anchor, $$props) {
  // ...
}

$.mark_module_end(Button_stories);
```

```js {15}
// COMPILED: Button.stories.svelte

import "svelte/internal/disclose-version";

$.mark_module_start();
// ...

import * as $ from "svelte/internal/client";
import { defineMeta } from "@storybook/addon-svelte-csf";
import { fn } from "@storybook/test";
import Button from "./components/Button.svelte";

const onclickFn = fn().mockName("onclick");

const { Story, meta } = defineMeta({ /* ... */ });

function Button_stories($$anchor, $$props) {
  // ...
}

$.mark_module_end(Button_stories);
```

```js {15,23}
// COMPILED: Button.stories.svelte

import "svelte/internal/disclose-version";

$.mark_module_start();
// ...

import * as $ from "svelte/internal/client";
import { defineMeta } from "@storybook/addon-svelte-csf";
import { fn } from "@storybook/test";
import Button from "./components/Button.svelte";

const onclickFn = fn().mockName("onclick");

const { Story, meta } = defineMeta({ /* ... */ });

function Button_stories($$anchor, $$props) {
  // ...
}

$.mark_module_end(Button_stories);

export default meta;
```
````

---
title: The Solution - Transformation - defineMeta comment
level: 3
transition: slide-up
layout: full
class: bg-emerald-900
---

# Transforming `defineMeta()` comment

````md magic-move
```svelte {all|10|6-9,10}
<!-- Button.stories.svelte -->

<script context="module">
    // ...

 /**
  * These are the stories for the `Button` component.
  * It's the default button we use throughout our application.
  */
 const { Story } = defineMeta({ /* ... */ });
</script>
```
```js {all|11|7-10,11}
// COMPILED: Button.stories.svelte

import "svelte/internal/disclose-version";

// ...

/**
 * These are the stories for the `Button` component.
 * It's the default button we use throughout our application.
 */
const { Story, meta } = defineMeta({ /* ... */ });
```

```js {7-10,11,21,13-20}
// COMPILED: Button.stories.svelte

import "svelte/internal/disclose-version";

// ...

/**
 * These are the stories for the `Button` component.
 * It's the default button we use throughout our application.
 */
const { Story, meta } = defineMeta({
  /* ... */
  parameters: {
    docs: {
      description: {
        component:
          "These are the stories for the `Button` component.\nIt's the default button we use throughout our application.",
      },
    },
  },
});
```
````

<v-clicks>

![defineMeta leading comment as component description](/define-meta-comment.png){class="fixed top-10 right-10 w-[auto] h-[950px]"

<div>
<div class="fixed top-[70px] left-[270px] w-[460px] h-[30px] border-2 border-secondary bg-secondary bg-op-10"></div>
<v-drag-arrow class="text-secondary" pos="461,181,0,-78"/>
</div>

More on [`description` on <logos-storybook-icon /> documentation](https://storybook.js.org/docs/api/doc-blocks/doc-block-description)

</v-clicks>

---
title: The Solution - Transformation - Story comment
level: 3
transition: fade
layout: full
class: bg-emerald-900
---

# Transforming `Story` comments

````md magic-move
```svelte {all|3-4,10-11}
<!-- Button.stories.svelte -->

<!-- Only use this sparingly as the main CTA. -->
<Story name="Primary" args={{ primary: true }} />

<Story name="Secondary" />

<Story name="Large" args={{ size: 'large' }} />

<!-- This is _tiny_ 🤏 -->
<Story name="Small" args={{ size: 'small' }} />

<Story name="Long content">
  <Button onclick={onclickFn}>The very long content</Button>
</Story>
```

```js {all|6-9,13-16}
// COMPILED: Button.stories.svelte

function Button_stories($$anchor, $$props) {
  // ...

  Story(node_1, {
    name: "Primary",
    args: { primary: true },
  });

  // ...

  Story(node_4, {
    name: "Small",
    args: { size: "small" },
  });

  // ...
}
```
````

<v-click at="3">

[Where are the comments?!]{class="fixed bottom-[100px] right-[100px] color-secondary"}

</v-click>

---
title: The Solution - Transformation - parsing Svelte AST reasons
level: 3
transition: fade
layout: statement
class: bg-emerald-950
---

This is one of reasons of [why]{class="color-secondary"} we have to parse and walk <logos-svelte-icon /> Svelte AST, again.

<v-clicks>

For the [DX]{class="color-secondary"} sake. We do heavy lifting for you.

</v-clicks>

---
title: The Solution - Transformation - Story comment transformation
level: 3
transition: slide-up
layout: full
class: bg-emerald-900
---

# Transforming `Story`(s) comments

````md magic-move
```svelte {all|3-4,10-11}
<!-- Button.stories.svelte -->

<!-- Only use this sparingly as the main CTA. -->
<Story name="Primary" args={{ primary: true }} />

<Story name="Secondary" />

<Story name="Large" args={{ size: 'large' }} />

<!-- This is _tiny_ 🤏 -->
<Story name="Small" args={{ size: 'small' }} />

<Story name="Long content">
  <Button onclick={onclickFn}>The very long content</Button>
</Story>
```

```js {all|6,9,13,16}
// COMPILED: Button.stories.svelte

function Button_stories($$anchor, $$props) {
  // ...

  Story(node_1, {
    name: "Primary",
    args: { primary: true },
  });

  // ...

  Story(node_4, {
    name: "Small",
    args: { size: "small" },
  });
}
```
```js {6,9-11,12,16,19-21,22}
// COMPILED: Button.stories.svelte

function Button_stories($$anchor, $$props) {
  // ...

  Story(node_1, {
    name: "Primary",
    args: { primary: true },
    parameters: {
      docs: { description: { story: "Only use this sparingly as the main CTA." } },
    },
  });

  // ...

  Story(node_4, {
    name: "Small",
    args: { size: "small" },
    parameters: {
      docs: { description: { story: "This is _tiny_ 🤏" } },
    },
  });
}
```
````

<v-clicks>

![Stories leading comment as story description](/stories-comments.png){class="fixed top-0 right-10 w-[auto] h-[600px]"

<div>
<div class="fixed top-[45px] left-[335px] w-[160px] h-[25px] border-2 border-secondary bg-secondary bg-op-10"></div>
<v-drag-arrow class="text-secondary" pos="600,58,-90,0"/>

<div class="fixed top-[430px] left-[335px] w-[160px] h-[25px] border-2 border-secondary bg-secondary bg-op-10"></div>
<v-drag-arrow class="text-secondary" pos="600,444,-90,0"/>
</div>

</v-clicks>

---
title: The Solution - Transformation - Runtime stories
level: 3
transition: fade
layout: full
class: bg-emerald-900
---

# Creating `export`ed stories

````md magic-move
```svelte
<!-- Button.stories.svelte -->

<Story name="Primary" args={{ primary: true }} />
```
```ts
// COMPILED: Button.stories.svelte

export const Primary: StoryObj<Button> = {
  args: { primary: true },
};
```
````

<v-clicks>

This is [not]{class="text-secondary"} the way.

[Why?]{text="color-secondary"}

SCF.

</v-clicks>

---
title: The Solution - Transformation - Runtime stories - scf
level: 3
transition: fade
layout: full
class: bg-emerald-900
---

# Where are the `Story`(s) internals in the [compiled]{class="text-secondary"} output?

````md magic-move
```svelte
<!-- Button.stories.svelte -->

<Story
  name="Test"
  args={{ primary: true }}
>
  {#snippet children(args)}
      <Button {...args}>Click me</Button>
  {/snippet}
</Story>
```
```svelte {all|4,6-8,16}
<!-- Button.stories.svelte -->

<script lang="ts">
  let size = $state<"small" | "large">("small");

  function handle_click() {
    size = size === "small" ? "large" : "small";
  }
</script>

<Story
  name="Test"
  args={{ primary: true }}
>
  {#snippet children(args)}
    <Button {...args} onclick={handle_click} {size}>Click me</Button>
  {/snippet}
</Story>
```
```svelte {all|6-16}
<!-- Button.stories.svelte -->

<Story
  name="Test"
  args={{ primary: true }}
  play={async (context) => {
    const { args, canvasElement } = context;
    const { onclick } = args;
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    waitFor(() => {
        expect(onclick).toHaveBeenCalled();
        expect(button).toHaveClass("large");
    });
  }}
>
  {#snippet children(args)}
      <Button {...args} onclick={handle_click} {size}>Click me</Button>
  {/snippet}
</Story>
```
```svelte {all|6-11}
<!-- Button.stories.svelte -->

<Story
    name="Sizes"
    args={{ primary: true }}
>
    {#snippet children(args)}
        {#each ["small", "large"] as size}
            <Button {...args} {size}>Click me</Button>
        {/each}
    {/snippet}
</Story>
```

```js {all|14-16}
// COMPILED: Button.stories.svelte

$.mark_module_start();

import * as $ from "svelte/internal/client";
import { defineMeta } from "@storybook/addon-svelte-csf";
import { fn } from "@storybook/test";
import Button from "./components/Button.svelte";

const onclickFn = fn().mockName("onclick");

const { Story } = defineMeta({ /* ... */ });

function Button_stories($$anchor, $$props) {
  // ...
}
```
```js {all|14,18}
// COMPILED: Button.stories.svelte

function Button_stories($$anchor, $$props) {
  $.check_target(new.target);
  $.push($$props, false, Button_stories);

  // ...

  $.init();

  var fragment_2 = root();
  var node_1 = $.first_child(fragment_2);

  Story(node_1, { name: "Primary", args: { primary: true } });

  var node_2 = $.sibling(node_1, 2);

  Story(node_2, { name: "Secondary" });

  // ...

  $.append($$anchor, fragment_2);
  return $.pop({ ...$.legacy_api() });
}

// ...
```
````

---
title: The Solution - Transformation - Runtime stories - statement
level: 3
transition: fade
layout: statement
class: bg-emerald-900
---

<logos-svelte-icon /> Svelte [runes]{class="text-secondary"} or [syntax blocks]{class="text-secondary"} live inside the Single Component Function (SCF) scope.

<v-clicks>

That's why the solution to access them is to create [runtime stories]{class="text-secondary"}.

Still, we had to create `export`(s) for <logos-storybook-icon /> Storybook engine.

</v-clicks>

---
title: The Solution - Transformation - Runtime stories - exports
level: 3
transition: slide-up
layout: full
class: bg-emerald-900
---

# Transformation - create runtime stories `export`s

```js
// COMPILED: Button.stories.svelte

export const { Story, meta } = defineMeta({ /* ... */ });

function Button_stories($$anchor, $$props) {
    // ...
}

export default meta;

import { createRuntimeStories } from "@storybook/addon-svelte-csf/internal/create-runtime-stories"; // [!code ++]

const __stories = createRuntimeStories(Button_stories, meta); // [!code ++]

export const Primary = __stories["Primary"]; // [!code ++]
export const Secondary = __stories["Secondary"]; // [!code ++]
export const Large = __stories["Large"]; // [!code ++]
export const Small = __stories["Small"]; // [!code ++]
export const LongContent = __stories["LongContent"]; // [!code ++]
```

<style>
  .line.diff.add {
    @apply bg-emerald-950;
  }
</style>