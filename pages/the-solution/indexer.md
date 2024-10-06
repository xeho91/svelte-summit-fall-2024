---
title: The Solution - Storybook's indexer API - Example
level: 2
layout: full
class: bg-emerald-900
---

# The Solution

<a href="https://storybook.js.org/docs/api/main-config/main-config-indexers"><p class="text-xl"><logos-storybook-icon /> Storybook's indexer API</p></a>

```ts {all|4|5,16|8,15|11,12,13,14|6}{lines:true}
import type { IndexInput, Indexer } from '@storybook/types';

export const createIndexer = (): Indexer => ({
    test: /\.svelte$/,
    createIndex: async (filename, { makeTitle }) => {
        // ❓❔

        return stories.map((story) => ({
            type: 'story',
            importPath: filename,
            exportName: story.exportName,
            name: story.name,
            title: makeTitle(meta.title),
            tags: [...(meta.tags ?? []), ...(story.tags ?? [])],
        } satisfies IndexInput);
    },
});
```

---
title: The Solution - Storybook's indexer API - Ingredients
level: 3
transition: slide-down
layout: two-cols
image: /storybook-sidebar.png
class: bg-emerald-900
---

<div class="h-full ml-10 flex flex-col align-start justify-center">

# <carbon-chemistry /> Ingredients

<v-click>

1. [`parse()`](https://svelte.dev/docs/svelte-compiler#parse) from <logos-svelte-icon /> [`svelte/compiler`](https://svelte.dev/docs/svelte-compiler)

</v-click>

<v-click at="4">

2. [<logos-npm-icon /> `zimmerframe`](https://github.com/Rich-Harris/zimmerframe)

</v-click>

</div>

::right::

<div class="h-full mr-10 flex flex-col items-center justify-center">

<img
    v-click
    alt="Svelte 5 playground example"
    src="/svelte-5-preview-ast.jpeg"
/>

<v-click>
    <v-drag-arrow class="text-secondary" pos="715,396,0,-130"/>
    <span class="text-3xl text-secondary nowrap">AST Output</span>
</v-click>

</div>

---
title: The Solution - Storybook's indexer API - Implementation
level: 2
layout: full
class: bg-emerald-900
transition: slide-up
---

# The Solution - Implementation

<a href="https://storybook.js.org/docs/api/main-config/main-config-indexers"><p class="text-xl"><logos-storybook-icon /> Storybook's indexer API</p></a>

````md magic-move
```ts {6}
import type { IndexInput, Indexer } from '@storybook/types';

export const createIndexer = (): Indexer => ({
    test: /\.svelte$/,
    createIndex: async (filename, { makeTitle }) => {
        // ❓❔

        return stories.map((story) => ({
            type: 'story',
            importPath: filename,
            exportName: story.exportName,
            name: story.name,
            title: makeTitle(meta.title),
            tags: [...(meta.tags ?? []), ...(story.tags ?? [])],
        } satisfies IndexInput);
    },
});
```
```ts {6}
import type { IndexInput, Indexer } from '@storybook/types';

export const createIndexer = (): Indexer => ({
    test: /\.svelte$/,
    createIndex: async (filename, { makeTitle }) => {
        const { meta, stories } = await parseForIndexer(filename, { legacyTemplate });

        return stories.map((story) => ({
            type: 'story',
            importPath: filename,
            exportName: story.exportName,
            name: story.name,
            title: makeTitle(meta.title),
            tags: [...(meta.tags ?? []), ...(story.tags ?? [])],
        } satisfies IndexInput);
    },
});
```
````

---
title: The Solution - Storybook's indexer API - Practice
level: 3
transition: none
layout: image-left
image: /storybook-sidebar.png
class: bg-emerald-900
---

# How it works in practice

<v-click at="2">
<p>Find on <span class="text-secondary">module</span> tag and <span class="text-secondary">defineMeta</span> declaration</p>
</v-click>

<v-click>
```svelte {all|3,15|8,12}
<!-- Button.stories.svelte -->

<script context="module">
  import { defineMeta } from '@storybook/addon-svelte-csf';

  // ...

  const { Story } = defineMeta({
    component: Button,
    title: 'Atom/Button',
    tags: ['autodocs'],
  });

  // ...
</script>

<!-- ... -->
```
</v-click>
---
title: The Solution - Storybook's indexer API - Practice - title
level: 4
transition: none
layout: image-left
image: /storybook-sidebar.png
class: bg-emerald-900
---

# How it works in practice

Extracting `title` from stories <span class="text-secondary">meta</span>

```svelte {10} /Atom\\/Button/
<!-- Button.stories.svelte -->

<script context="module">
  import { defineMeta } from '@storybook/addon-svelte-csf';

  // ...

  const { Story } = defineMeta({
    component: Button,
    title: 'Atom/Button',
    tags: ['autodocs'],
  });

  // ...
</script>

<!-- ... -->
```

<div class="fixed top-[205px] left-[25px] w-[150px] h-[45px] bg-secondary bg-op-10 border-2 border-solid border-secondary"></div>
<div class="fixed top-[155px] left-[25px] w-[150px] h-[45px] bg-secondary bg-op-10 border-2 border-solid border-secondary"></div>
<v-drag-arrow class="text-secondary" pos="338,203,-154,-1"/>

<style>
  .highlighted-word {
    @apply bg-secondary;
    @apply bg-op-10;
    @apply border-secondary;
    @apply border-2;
    @apply border-solid;
  }
</style>

---
title: The Solution - Storybook's indexer API - Practice - tags
level: 4
transition: none
layout: image-left
image: /storybook-sidebar.png
class: bg-emerald-900
dragPos:
  square: Left,Top,Width,Height,Rotate
---

# How it works in practice

Extracting `tags` from stories <span class="text-secondary">meta</span>

```svelte {11} /autodocs/
<!-- Button.stories.svelte -->

<script context="module">
  import { defineMeta } from '@storybook/addon-svelte-csf';

  // ...

  const { Story } = defineMeta({
    component: Button,
    title: 'Atom/Button',
    tags: ['autodocs'],
  });

  // ...
</script>

<!-- ... -->
```

<v-drag-arrow  class="text-secondary" pos="342,275,-130,0"/>
<div class="fixed top-[250px] left-[50px] w-[150px] h-[45px] bg-secondary bg-op-10 border-2 border-solid border-secondary"></div>

<style>
  .highlighted-word {
    @apply bg-secondary;
    @apply bg-op-10;
    @apply border-secondary;
    @apply border-2;
    @apply border-solid;
  }
</style>

---
title: The Solution - Storybook's indexer API - Practice - Stories
level: 4
transition: none
layout: image-left
image: /storybook-sidebar.png
class: bg-emerald-900
---

# How it works in practice

<p>Find <code>Story</code>(s) in <span class="text-secondary">fragment</span></p>

```svelte {all|7-19}
<!-- Button.stories.svelte -->

<script context="module">
  // ...
</script>

<Story name="Primary" args={{ primary: true }} />

<Story name="Secondary" />

<Story name="Large" args={{ size: 'large' }} />

<Story name="Small" args={{ size: 'small' }} />

<Story name="Long content">
  <Button onclick={onclickFn}>The very long content</Button>
</Story>

<Story name="Test" tags={["!dev"]} />
```

---
title: The Solution - Storybook's indexer API - Practice - names and tags
level: 4
layout: image-left
transition: fade-out
image: /storybook-sidebar.png
class: bg-emerald-900
---

# How it works in practice

<p>Extract <code>name</code>(s) & <code>tags</code> from <span class="text-secondary">attributes</span></p>

```svelte {7,9,11,13,15,19} /name="Primary"/ /name="Secondary"/ /name="Large"/ /name="Small"/ /name="Long content"/ /name="Test"/ /tags={["!dev"]}/
<!-- Button.stories.svelte -->

<script context="module">
  // ...
</script>

<Story name="Primary" args={{ primary: true }} />

<Story name="Secondary" />

<Story name="Large" args={{ size: 'large' }} />

<Story name="Small" args={{ size: 'small' }} />

<Story name="Long content">
  <Button onclick={onclickFn}>The very long content</Button>
</Story>

<Story name="Test" tags={["!dev"]} />
```

<style>
  .highlighted-word {
    @apply bg-secondary;
    @apply bg-op-10;
    @apply border-secondary;
    @apply border-2;
    @apply border-solid;
  }
</style>

<v-drag-arrow  class="text-secondary" pos="444,404,-148,0"/>
<div class="z-100 fixed top-[300px] left-[80px] bg-secondary bg-op-10 border-2 border-solid border-secondary w-[200px] h-[220px]"></div>
