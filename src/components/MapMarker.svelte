<script>
    import { getContext } from 'svelte';
	import { mapbox, key } from '../utils/mapbox.js';

    const { getMap } = getContext(key);
    const map = getMap();

	export let lat;
	export let lng;
	export let label;

	const popup = new mapbox.Popup({ offset: 25 })
		.setText(label);

	const marker = new mapbox.Marker()
		.setLngLat([lng, lat])
		.setPopup(popup)
		.addTo(map);
</script>