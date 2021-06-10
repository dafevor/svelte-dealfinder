<script>
	import Navigation from './components/Navigation.svelte';
	import Map from './components/Map.svelte';
	import MapMarker from './components/MapMarker.svelte'

</script>

<style>
	.app {
  		text-align: center;
	}

	.app-header {
  		min-height: 8vh;
  		display: flex;
  		flex-direction: column;
  		align-items: center;
  		justify-content: center;
  		font-size: calc(10px + 2vmin);
  		color: white;
	}

	.app-main {
  		display: flex;
  		flex-direction: column;
	}	

	/*@media (min-width: 640px) {
	}*/
</style>

<div class="app">
	<header class="app-header">
		<Navigation/>
	</header>
	<main class="app-main">
		<Map lat={35} lon={-84} zoom={3.5}>
			<MapMarker lat={37.8225} lon={-122.0024} label="Svelte Body Shaping"/>
			<MapMarker lat={33.8981} lon={-118.4169} label="Svelte Barbershop & Essentials"/>
			<MapMarker lat={29.7230} lon={-95.4189} label="Svelte Waxing Studio"/>
			<MapMarker lat={28.3378} lon={-81.3966} label="Svelte 30 Nutritional Consultants"/>
			<MapMarker lat={40.6483} lon={-74.0237} label="Svelte Brands LLC"/>
			<MapMarker lat={40.6986} lon={-74.4100} label="Svelte Medical Systems"/>
		</Map>
	</main>
</div>
