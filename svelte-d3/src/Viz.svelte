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
            return 'dodgerblue'
        } else if(party == "Republican"){
            return 'crimson'
        } else if(party == "Independent"){
            return 'khaki'
        } else {
            return 'grey'
        }
    }

</script>

<style>

.boat-wrapper {
  display: inline-block;
  width: 300px;
}

.boat-svg {
  width: 300px;
  height: 300px;
}

</style>

<h1>Testing a bespoke VC viz</h1>
{#each bespokeData as data, i}
    <div class="boat-wrapper">
        <svg class ='boat-svg'>
            <g id ='boat'>
                <g filter="url(#filter0_b)">
                    <path d="M119.5 50H9.5H0L9.5 74H146.5L169.5 37H132.5L119.5 50Z" fill="#C4C4C4"/>
                </g>
                <path d="M147.5 60H12.5L25.5 74H133.5L147.5 60Z" fill="#A5A2A2"/>
                <rect x="55" width="50" height='{50 * data.donation_count / 7}' rx="5" fill = '{colorFunction(data.party)}'/>
                <rect x="12" y="19" width="25" height="35" rx="5" fill="#C4C4C4"/>
                <rect x="22" y="27" width="5" height="10" rx="2.5" fill="#816E6E"/>
                <rect x="30" y="27" width="5" height="10" rx="2.5" fill="#816E6E"/>
                <rect x="6" y="15" width="{36 * data.total_donated / 158}" height="7" rx="3.5" fill="#A5A2A2"/>
                <defs>
                <filter id="filter0_b" x="-4" y="33" width="177.5" height="45" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImage" stdDeviation="2"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape"/>
                </filter>
                </defs>
            </g>
        </svg>
        <div class="label">{data.firm_name}</div>
    </div>
{/each}




