import Education from './Education.svelte';
import Music from './Music.svelte';
import Projects from './Projects.svelte';
import App from './App.svelte';

export const routes = [
    {'/': App},
    {'/Education': Education},
    {'/Music': Music},
    {'/Projects': Projects}
];