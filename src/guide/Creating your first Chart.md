# Creating your first Chart
First, you need to import the base chart and extend it. This gives more flexibility when working with different data. You can encapsulate your components and use props to pass data, or you can input them directly inside the component. However, your component is not reusable this way.

You can import the whole package or each module individually. Then, you need to use either `extends:` or `mixins:[]`. Afterwards, in the `mounted()` hook, call `this.renderChart()`. This will create your chart instance.

```js{2,6,9}
import { defineComponent } from 'vue'
import { Bar } from 'vue3-chart-v2'

export default defineComponent({
  name: 'MonthlyChart',
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(data, options)
  }
})
```
:::tip
You can either use `extends: Bar` or `mixins: [Bar]`
:::

The method `this.renderChart()` is provided by the `Bar` component and accepts two parameters: both are `objects`. The first one is your chart data, and the second one is an options object.

Check out the official [Chart.js docs](http://www.chartjs.org/docs/latest/#creating-a-chart) to see the object structure you need to provide.

### Vue Single File Components


*MonthlyChart.vue*
```vue
<script>
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
##