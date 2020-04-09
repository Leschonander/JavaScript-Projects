<script>
    
    let vizWidth = 274
    let vizHeight = 215

	let bespokeData = [
		{
            firm_name: "ExampleA",
			donation_count: 9,
			total_donated: 250,
			party: "Democrat"
		},
		{
            firm_name: "ExampleB",
			donation_count: 5,
			total_donated: 125,
			party: "Republican"
        },
        
        {
            firm_name: "ExampleC",
			donation_count: 7,
			total_donated: 100,
			party: "Independent"
        },
        
        {
            firm_name: "ExampleD",
			donation_count: 9,
			total_donated: 250,
			party: "Democrat"
		},
		{
            firm_name: "ExampleE",
			donation_count: 5,
			total_donated: 125,
			party: "Republican"
        },
        
        {
            firm_name: "ExampleF",
			donation_count: 7,
			total_donated: 100,
			party: "Independent"
		}
    ]
    
    let colorFunction = (party) => {
        if(party == "Democrat"){
            return 'blue'
        } else if(party == "Republican"){
            return 'red'
        } else if(party == "Independent"){
            return 'yellow'
        } else {
            return 'grey'
        }
    }


</script>

<style>

</style>

<h1>Testing a bespoke VC viz</h1>
    <svg width="1300" height="10000">
   {#each bespokeData as data, i}
    <g width="100" height="100" viewBox="0 0 200 200"  xmlns="http://www.w3.org/2000/svg" transform= 'translate({i % 5 * vizWidth}, {Math.floor(i / 5) * vizHeight})' key = '{i}'>
        <circle r = '{data.donation_count * 5}' cx = "50" cy = "50" fill = '{colorFunction(data.party)}'/>
        <path transform= 'scale({data.total_donated / 250})' d="M57.0625 57.2109C57.0625 55.7734 56.5547 54.5625 55.5391 53.5781C54.5391 52.5938 52.8438 51.7031 50.4531 50.9062C47.125 49.8906 44.6953 48.5703 43.1641 46.9453C41.6484 45.3047 40.8906 43.2266 40.8906 40.7109C40.8906 38.1484 41.6328 36.0469 43.1172 34.4062C44.6172 32.7656 46.6719 31.7891 49.2812 31.4766V26.3438H52.7734V31.5C55.3984 31.8594 57.4375 32.9609 58.8906 34.8047C60.3594 36.6484 61.0938 39.1719 61.0938 42.375H56.7812C56.7812 40.1719 56.2578 38.4219 55.2109 37.125C54.1641 35.8281 52.75 35.1797 50.9688 35.1797C49.1094 35.1797 47.6875 35.6641 46.7031 36.6328C45.7188 37.5859 45.2266 38.9219 45.2266 40.6406C45.2266 42.2344 45.7422 43.5078 46.7734 44.4609C47.8203 45.3984 49.5312 46.2578 51.9062 47.0391C54.2969 47.8047 56.1562 48.6562 57.4844 49.5938C58.8281 50.5156 59.8125 51.5938 60.4375 52.8281C61.0781 54.0625 61.3984 55.5078 61.3984 57.1641C61.3984 59.8047 60.6016 61.9297 59.0078 63.5391C57.4297 65.1484 55.2109 66.1016 52.3516 66.3984V70.875H48.8828V66.3984C45.9766 66.1328 43.6953 65.1016 42.0391 63.3047C40.3984 61.4922 39.5781 59.0391 39.5781 55.9453H43.9141C43.9141 58.1172 44.4844 59.7891 45.625 60.9609C46.7656 62.1328 48.3828 62.7188 50.4766 62.7188C52.5234 62.7188 54.1328 62.2266 55.3047 61.2422C56.4766 60.2578 57.0625 58.9141 57.0625 57.2109Z" fill="black"/>
        <text x= '{vizWidth / 2}' y= '{vizHeight - 30}' text-anchor="middle" fill = 'black'>
                {data.firm_name}
        </text>
    
    </g>
   {/each}
   </svg>





