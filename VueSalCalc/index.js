let vueContainer = {
    template: '<div class="container"><slot> </slot></div>',

} //Slot tags are like this.props in react, allow you to add stuff beyond what in component. ALLOW PRESENTATIONAL!

let lineChart =  {
    extends: VueChartJs.Line,
    props: ['yearlySaving', 'fiveYearSaving'], // WHen unquted says not definned.... 
    mounted () {
      this.renderChart({
        labels: ['Yearly Saving', 'Five Year Saving', 'Fifteen Year Saving', 'Thirty Year Saving'],
        datasets: [
          {
            label: 'Savings',
            backgroundColor: '#d3ebd5',
            data: ['yearlySaving', 30000, 90000, 180000] //yearlySaving, fiveYearSaving, fifteenYearSaving, thirtyYearSaving
          }
        ]
      }, {responsive: true, maintainAspectRatio: false})
    }
    
  }
// yearlySaving


const vm1 = new Vue({
    el: '#app',
    data: {
        baseSalary: 0,
        percentSaved: 0,
        msg: "Savings chart"
    },
    components: {
        'line-chart': lineChart, 
        'vue-container': vueContainer
    
    },
    computed: {
        salMonth() {
            return Math.round(this.baseSalary / 12)
        },
        salWeekly() {
            return Math.round(this.baseSalary / 48)
        },
        salDaily() {
            return Math.round(this.baseSalary / 336)
        },
        salHourly() {
            return Math.round(this.baseSalary / 2352)
        },
        yearlySaving() {
            return Math.round(this.baseSalary * this.percentSaved)
        },
        fiveYearSaving() {
            return this.yearlySaving * 5
        },
        fifteenYearSaving() {
            return this.yearlySaving * 15
        },
        thirtyYearSaving() {
            return this.yearlySaving * 30
        },
        
    },
    created() {
        this.baseSalary = 60000,
        this.percentSaved = .10
    },

})



