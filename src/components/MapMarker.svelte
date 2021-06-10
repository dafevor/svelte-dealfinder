<script>
    import { getContext } from 'svelte';
	import { mapbox, key } from '../utils/mapbox.js';

	export let lat;
	export let lon;
	export let label;

    const { getMap } = getContext(key);
    const map = getMap();

	const popup = new mapbox.Popup({ offset: 25 })
		.setText(label);

	const marker = new mapbox.Marker()
		.setLngLat([lon, lat])
		.setPopup(popup)
		.addTo(map);
</script>