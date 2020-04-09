<script>
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	import Viz from './Viz.svelte'

	var data = [30, 86, 168, 281, 303, 365];
	
	let bespokeData = [
		{
			donation_count: 10,
			total_donated: 250,
			party: "Democrat"
		},
		{
			donation_count: 5,
			total_donated: 125,
			party: "Republican"
		}
	]
	console.log(bespokeData)


</script>

<style>

</style>
<Viz />

<div ></div>