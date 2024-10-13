<!-- Button.stories.svelte -->

<script context="module">
    import { defineMeta } from '@storybook/addon-svelte-csf';
    import { fn } from '@storybook/test';

    import Button from './Button.svelte';

    const { Story } = defineMeta({
        title: 'Atom/Button',
        component: Button,
        tags: ['autodocs'],
        argTypes: { backgroundColor: { control: 'color' } },
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