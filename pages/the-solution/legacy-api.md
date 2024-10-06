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
