# Examples

## Chart with props

::: details template

```js
import { defineComponent } from 'vue'
import { Pie } from 'vue3-chart-v2'

export default defineComponent({
  name: 'MonthlyChart',
  extends: Pie,
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      required: false
    },
  },
  mounted () {
    this.renderChart(this.chartData, this.chartOptions)
  }
})
```
After that you can add your chart component to a parent component
```vue
<template>
  <MonthlyChart v-bind:chartData="state.chartData" v-bind:chartOptions="state.chartOptions" />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  data () {
    return {
      state: {
        chartData: {
          datasets: [
            {
              data: [1, 2, 3, 4],
              backgroundColor: ['Red', 'Yellow', 'Blue', 'Green']
            }
          ],
          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: ['Red', 'Yellow', 'Blue', 'Green']
        },
        chartOptions: {
          responsive: false
        }
      }
    }
  }
})
</script>
```

*Output*
<iframe src="https://codesandbox.io/embed/chart-with-props-vhg4r?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="Chart with props"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts">
</iframe>

:::

::: details jsx
```js
import { defineComponent } from 'vue'
import { Bar } from 'vue3-chart-v2'

export default defineComponent({
  name: 'MonthlyChart',
  extends: Bar,
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      required: false
    },
  },
  mounted () {
    this.renderChart(this.chartData, this.chartOptions)
  }
})
```
After that you can add your chart component to a parent component
```jsx
export default defineComponent({
  data () {
    return {
      state: {
        chartData: {
          datasets: [
            {
              data: [1, 2, 3, 4],
              backgroundColor: ['Red', 'Yellow', 'Blue', 'Green']
            }
          ],
          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: ['Red', 'Yellow', 'Blue', 'Green']
        },
        chartOptions: {
          responsive: false
        }
      }
    }
  },
  render () {
    return (
      <Fragment>
        <MonthlyChart chartData={this.state.chartData} chartOptions={this.state.chartOptions} />
      </Fragment>
    )
  }
})
```

*Output*

<iframe src="https://codesandbox.io/embed/bold-kare-dkkgo?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="Chart with props-jsx"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
:::

## Chart with local data

::: details template

*SportChart.vue*
```vue
<script>
import { defineComponent } from 'vue'
import { Radar } from 'vue3-chart-v2'

export default defineComponent({
  name: 'SportChart',
  extends: Radar,
  data () {
    return {
      state: {
        chartData: {
           labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
            datasets: [
              {
                label: 'Human 1',
                data: [20, 10, 4, 2]
              },
              {
                label: 'Human 2',
                data: [10, 20, 2, 4]
              }
            ]
        },
        chartOptions: {
          responsive: false
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.state.chartData, this.state.chartOptions)
  }
})
</script>
```
After that you can render your chart component anywhere
```vue
<template>
  <SportChart />
</template>

<script>
import { defineComponent } from 'vue'
import SportChart from './path/to/SportChart'

export default defineComponent({
  name: 'App',
  components: {
    SportChart
  }
})
</script>
```
*Output*

<iframe src="https://codesandbox.io/embed/chart-with-local-data-6xcx7?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="Chart with local data"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

:::

::: details jsx

*SportChart.js*

```js
import { defineComponent } from 'vue'
import { Radar } from 'vue3-chart-v2'

export default defineComponent({
  name: 'SportChart',
  extends: Radar,
  data () {
    return {
      state: {
        chartData: {
           labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
            datasets: [
              {
                label: 'Human 1',
                data: [20, 10, 4, 2]
              },
              {
                label: 'Human 2',
                data: [10, 20, 2, 4]
              }
            ]
        },
        chartOptions: {
          responsive: false
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.state.chartData, this.state.chartOptions)
  }
})
```

After that you can render your chart component anywhere

```js
import { defineComponent, Fragment } from 'vue'
import SportChart from './path/to/SportChart'

export default defineComponent({
  name: 'App',
  render () {
    return (
      <Fragment>
        <SportChart />
      </Fragment>
    )
  }
})
```

*Output*

<iframe src="https://codesandbox.io/embed/cocky-mirzakhani-34zul?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="Chart with local data-jsx"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

:::

## Chart with API data
::: details template
A common pattern is to use an API to retrieve your data. However, there are some things to keep in mind. The most common problem is that you mount your chart component directly and pass in data from an asyncronous API call. The problem with this approach is that Chart.js tries to render your chart and access the chart data syncronously, so your chart mounts before the API data arrives.

To prevent this, a simple `v-if` is the best solution.

Create your chart component with a data prop and options prop, so we can pass in our data and options from a container component.

```js
import { defineComponent } from 'vue'
import { Line } from 'vue3-chart-v2'

export default defineComponent({
  extends: Line,
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      required: false
    },
  },
  mounted () {
    this.renderChart(this.chartData, this.chartOptions)
  }
})
</script>
```

Then create a container component, which handles your api call or vuex connection.

```vue {3}
<template>
  <MonthlyChart 
    v-if="state.isLoaded" 
    v-bind:chartData="state.chartData" 
    v-bind:chartOptions="state.chartOptions" 
  />
</template>

<script>
import { defineComponent } from 'vue'
import LineChart from './LineChart.vue' // Or LineChart.js

export default defineComponent({
  name: 'MonthlyChartContainer',
  extends: Bar,
  data () {
    return {
      state: {
        isLoaded: false,
        chartData: null
      }
    }
  },
  mounted () {
    this.state.isLoaded = false
    fetch('/api/userlist')
    .then((response) => response.json())
    .then((result) => {
      this.state.chartData = result
      this.state.isLoaded = false
    })
    .cath((err) => {
      console.error(err)
    })
  }
})
</script>
```

:::

::: details jsx
A common pattern is to use an API to retrieve your data. However, there are some things to keep in mind. The most common problem is that you mount your chart component directly and pass in data from an asyncronous API call. The problem with this approach is that Chart.js tries to render your chart and access the chart data syncronously, so your chart mounts before the API data arrives.

To prevent this, a simple `&&` or `if` is the best solution.

Create your chart component with a data prop and options prop, so we can pass in our data and options from a container component.

```js
import { defineComponent } from 'vue'
import { Line } from 'vue3-chart-v2'

export default defineComponent({
  extends: Line,
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      required: false
    },
  },
  mounted () {
    this.renderChart(this.chartData, this.chartOptions)
  }
})
```

```jsx {32}
import { defineComponent } from 'vue'
import LineChart from './LineChart.vue' // Or LineChart.js

export default defineComponent({
  name: 'MonthlyChartContainer',
  extends: Bar,
  data () {
    return {
      state: {
        isLoaded: false,
        chartData: null
      }
    }
  },
  mounted () {
    this.state.isLoaded = false
    fetch('/api/userlist')
    .then((response) => response.json())
    .then((result) => {
      this.state.chartData = result
      this.state.isLoaded = false
    })
    .cath((err) => {
      console.error(err)
    })
  },
  render () {
    return (
      <Fragment>
      {
        this.state.isLoaded && (
          <MonthlyChart chartData={this.state.chartData} chartOptions={this.state.chartOptions} />
        )
      }
      </Fragment>
    )
  }
})
```

:::


## Chart with dynamic data

::: details template
// LineChart.js
```js
import { defineComponent } from 'vue'
import { Line } from 'vue3-chart-v2'

export default defineComponent({
  extends: Line,
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      required: false
    },
  },
  mounted () {
    this.renderChart(this.chartData, this.chartOptions)
  }
})
```
// import your LineChart.js
```vue
<template>
  <LineChart v-bind:chartData="state.chartDatav" />
  <button v-on:click="fillData">Randomize</button>
</template>

<script>
import { defineComponent } from 'vue'
import LineChart from './path/to/LineChart.js'

export default defineComponent({
  name: 'App',
  data () {
    return {
      state: {
        chartData: {},
      }
    }
  },
  beforeMount () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.state.chartData = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }, 
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (10 - 5 + 1)) + 10
    }
  },
})
</script>
```

:::

::: details jsx
// LineChart.js
```js
import { defineComponent } from 'vue'
import { Line } from 'vue3-chart-v2'

export default defineComponent({
  extends: Line,
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      required: false
    },
  },
  mounted () {
    this.renderChart(this.chartData, this.chartOptions)
  }
})
```
// import your LineChart.js
```js
import { defineComponent } from 'vue'
import LineChart from './path/to/LineChart.js'

export default defineComponent({
  name: 'App',
  extends: Line,
  data () {
    return {
      state: {
        chartData: {},
      }
    }
  },
  beforeMount () {
    this.handleFillData()
  },
  methods: {
    handleFillData () {
      this.state.chartData = {
        labels: [this.handleGetRandomInt(), this.handleGetRandomInt()],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.handleGetRandomInt(), this.handleGetRandomInt()]
          }, 
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.handleGetRandomInt(), this.handleGetRandomInt()]
          }
        ]
      }
    },
    handleGetRandomInt () {
      return Math.floor(Math.random() * (10 - 5 + 1)) + 10
    }
  },
  render() {
    return (
      <Fragment>
        <Chart chartData={this.state.chartData} />
        <button onClick={this.fillData}>Randomize</button>
      </Fragment>
    )
  }
})
```
:::

##
