# Examples

## Chart with props

::: details template
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
</script>
```
After that you can add your chart component to a parent component
```vue
<template>
  <MonthlyChart v-bind:chartData="chartData" v-bind:chartOptions="chartOptions" />
</template>
```

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
  render () {
    return (
      <Fragment>
        <MonthlyChart chartData={chartData} chartOptions={chartOptions} />
      </Fragment>
    )
  }
})
```
:::

## Chart with local data

::: details template
```js
import { defineComponent } from 'vue'
import { Bar } from 'vue3-chart-v2'

export default defineComponent({
  name: 'MonthlyChart',
  extends: Bar,
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
  mounted () {
    this.renderChart(this.state.chartdata, this.state.options)
  }
})
</script>
```

:::

::: details jsx
```js
import { defineComponent } from 'vue'
import { Bar } from 'vue3-chart-v2'

export default defineComponent({
  name: 'MonthlyChart',
  extends: Bar,
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
  mounted () {
    this.renderChart(this.state.chartdata, this.state.options)
  }
})
```
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



##
