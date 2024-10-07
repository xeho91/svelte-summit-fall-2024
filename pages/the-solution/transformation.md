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
4. <logos-javascript />  `parse()` from <logos-rollup /> `rollup`
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
import "svelte/internal/disclose-version";

$.mark_module_start();
Button_stories[$.FILENAME] = "examples/Button.stories.svelte";

import * as $ from "svelte/internal/client";
import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';
import { fn } from '@storybook/test';
import Button from './components/Button.svelte';

const onclickFn = fn().mockName('onclick');

const { Story } = defineMeta({ /* ... */ });

var root = $.add_locations($.template(`<!> <!> <!> <!> <!>`, 1), Button_stories[$.FILENAME], []);

function Button_stories($$anchor, $$props) {
    // ...
}

export default Button_stories;

$.mark_module_end(Button_stories);
```
```js {20|all|13}
import "svelte/internal/disclose-version";

$.mark_module_start();
Button_stories[$.FILENAME] = "examples/Button.stories.svelte";

import * as $ from "svelte/internal/client";
import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';
import { fn } from '@storybook/test';
import Button from './components/Button.svelte';

const onclickFn = fn().mockName('onclick');

const { Story } = defineMeta({ /* ... */ });

var root = $.add_locations($.template(`<!> <!> <!> <!> <!>`, 1), Button_stories[$.FILENAME], []);

function Button_stories($$anchor, $$props) {
    // ...
}

$.mark_module_end(Button_stories);
```
```js {13}
import "svelte/internal/disclose-version";

$.mark_module_start();
Button_stories[$.FILENAME] = "examples/Button.stories.svelte";

import * as $ from "svelte/internal/client";
import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';
import { fn } from '@storybook/test';
import Button from './components/Button.svelte';

const onclickFn = fn().mockName('onclick');

const { Story, meta } = defineMeta({ /* ... */ });

var root = $.add_locations($.template(`<!> <!> <!> <!> <!>`, 1), Button_stories[$.FILENAME], []);

function Button_stories($$anchor, $$props) {
    // ...
}

$.mark_module_end(Button_stories);
```
```js {13,23}
import "svelte/internal/disclose-version";

$.mark_module_start();
Button_stories[$.FILENAME] = "examples/Button.stories.svelte";

import * as $ from "svelte/internal/client";
import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';
import { fn } from '@storybook/test';
import Button from './components/Button.svelte';

const onclickFn = fn().mockName('onclick');

const { Story, meta } = defineMeta({ /* ... */ });

var root = $.add_locations($.template(`<!> <!> <!> <!> <!>`, 1), Button_stories[$.FILENAME], []);

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
```svelte {all|8-21|4-7,8,21}
<script context="module">
    // ...

	/**
	 * These are the stories for the `Button` component.
	 * It's the default button we use throughout our application.
	 */
	const { Story } = defineMeta({
        /* ... */
	});
</script>

<!-- ... -->
```
```js {all|5-8}
import "svelte/internal/disclose-version";

// ...

/**
 * These are the stories for the `Button` component.
 * It's the default button we use throughout our application.
 */
const { Story, meta } = defineMeta({
    /* ... */
});

// ...
```
```js {5-8,11-17}
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
				component: "These are the stories for the `Button` component.\nIt's the default button we use throughout our application."
			}
		}
	}
});

// ...
```
````

<v-click>

More on [`description` on <logos-storybook-icon /> documentation](https://storybook.js.org/docs/api/doc-blocks/doc-block-description)

</v-click>

---
title: The Solution - Transformation - Story comment
level: 3
transition: fade
layout: full
class: bg-emerald-900
---

# Transforming `Story` comments

````md magic-move
```svelte {all|5-6,12-13}
<script context="module">
    // ...
</script>

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
```js {all|8-11,15-18}
// ...

function Button_stories($$anchor, $$props) {
    // ...

    Story(node_1, {
        name: "Primary",
        args: { primary: true }
    });

    // ...

	Story(node_4, {
        name: "Small",
        args: { size: 'small' }
    });

    // ...
}

// ...
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
class: bg-emerald-900
---

<v-clicks>

This is one of reasons of [why]{class="color-secondary"} we have to parse and walk <logos-svelte-icon /> Svelte AST, again.

For the [DX]{class="color-secondary"} sake. We do heavy lifting for you.

</v-clicks>

---
title: The Solution - Transformation - Story comment transformation
level: 3
transition: fade
layout: full
class: bg-emerald-900
---

# Transforming `Story` comments

````md magic-move
```svelte {all|5-6,12-13}
<script context="module">
    // ...
</script>

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
```js {6-12,15-22|9-11,19-21}
// ...

function Button_stories($$anchor, $$props) {
    // ...

    Story(node_1, {
        name: "Primary",
        args: { primary: true },
        parameters: {
            docs: { description: { story: "Only use this sparingly as the main CTA." } }
        }
    });

    // ...

	Story(node_4, {
        name: "Small",
        args: { size: 'small' },
        parameters: {
            docs: { description: { story: "This is _tiny_ 🤏" } }
        }
    });

    // ...
}

// ...
```
````