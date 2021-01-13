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
import { SBAlert } from 'superbvue'

export default defineComponent({
  render() {
    return (
      <div>
        <SBAlert>primary alert—check it out!</SBAlert>

        // add background-color
        <SBAlert variant="secondary">secondary alert—check it out!</SBAlert>
      </div>
    )
  }
})
```
*Output*
<SBAlert />
:::



##
