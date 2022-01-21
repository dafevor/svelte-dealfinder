<script>
	import { onMount } from 'svelte';
	import Navigation from './components/Navigation.svelte';
	import Map from './components/Map.svelte';
	import MapMarker from './components/MapMarker.svelte';
	import { fetchPoints } from './apis/api.js'

	let myPosition = {};
	let markers = [];

	onMount(async () => {
		myPosition = { lat: 4.658133, lng: 285.878971 } //My position
		const nearPositions = await fetchPoints(myPosition, 10);
		markers = nearPositions
	});

</script>

<style>
	.app {
  		text-align: center;
	}

	.app-header {
  		height: 8%;
  		display: flex;
  		flex-direction: column;
  		align-items: center;
  		justify-content: center;
  		font-size: calc(10px + 2vmin);
  		color: white;
	}

	.app-main {
  		width: 100%;
		height: 92%;
	}
</style>

<div class="app">
	<header class="app-header">
		<Navigation/>
	</header>
	<main class="app-main">
		<Map lat={4.658133} lng={285.878971} zoom={15}>
			{#each markers as marker}
				<MapMarker lat={marker.lat} lng={marker.lng} label={marker.label}/>
			{/each}
		</Map>
	</main>
</div>
