<script>
	import { onMount, setContext } from 'svelte';
	import { mapbox, key } from '../utils/mapbox.js';

	setContext(key, {
		getMap: () => map
	});

	export let lat;
	export let lng;
	export let zoom;

	let container;
	let map;

	onMount(() => {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = 'https://unpkg.com/mapbox-gl/dist/mapbox-gl.css';

		link.onload = () => {
			map = new mapbox.Map({
				container,
				style: 'mapbox://styles/mapbox/streets-v9',
				center: [lng, lat],
				zoom
			});
		};

		document.head.appendChild(link);

		return () => {
			map.remove();
			link.parentNode.removeChild(link);
		};
	});
</script>

<div bind:this={container}>
	{#if map}
		<slot></slot>
	{/if}
</div>

<style>
	div {
		position: absolute;
		width: inherit;
		height: inherit;
	}
</style>