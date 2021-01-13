<template>
  <div class="container border">
    <table class="table">
      <thead>
        <tr>
          <th scope="col" v-for="(value) in state.fields" v-bind:key="value.id">{{value.text}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index, key) in state.items" v-bind:key="value.firstName" v-if="value.rowVariant">
          <td scope="row" class="text-primary">{{ value.age }}</td>
          <td class="text-primary">{{ value.fistName }}</td>
          <td class="text-primary">{{ value.lastName }}</td>
        </tr>
        <tr v-else>
          <td scope="row">{{ value.age }}</td>
          <td v-if="value.cellVariant" class="text-danger">{{ value.fistName }}</td>
          <td v-else>{{ value.fistName }}</td>
          <td>{{ value.lastName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'SBTableVariant',
  data() {
    return {
      state: {
        items: [
          // Note `isActive` is left out and will not appear in the rendered table
          { age: 40, fistName: 'Dickerson', lastName: 'Macdonald' },
          { age: 21, fistName: 'Larsen', rowVariant: 'primary', lastName: 'Shaw' },
          { age: 89, fistName: 'Geneva', lastName: 'Wilson' },
          { age: 38, fistName: 'Jami', lastName: 'Carney', cellVariant: { fistName: 'info' } }
        ],
        fields: [
          {id: 1, text: 'Age'},
          {id: 2, text: 'First Name'},
          {id: 3, text: 'Last Name'}
        ]
      }
    }
  }
})
</script>

<style src="../public/bootstrap.css"></style>
