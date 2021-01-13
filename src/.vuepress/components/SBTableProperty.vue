<template>
  <div class="container border">
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th v-for="(value) in state.fields" v-bind:key="value.id">{{value.text}}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-danger">fields</td>
          <td class="text-danger">String []</td>
          <td>table header</td>
        </tr>
        <tr>
          <td class="text-danger">items</td>
          <td class="text-danger">Object []</td>
          <td>table data in array format, where each record (row) data are keyed objects.</td>
        </tr>
        <tr>
          <td class="text-danger">striped</td>
          <td class="text-danger">Boolean</td>
          <td>add zebra-striping to any table row</td>
        </tr>
        <tr>
          <td class="text-danger">hover</td>
          <td class="text-danger">Boolean</td>
          <td>enable a hover state on table rows</td>
        </tr>
        <tr>
          <td class="text-danger">class</td>
          <td class="text-danger">String</td>
          <td></td>
        </tr>
        <tr>
          <td class="text-danger">squared</td>
          <td class="text-danger">Boolean</td>
          <td></td>
        </tr>
        <tr>
          <td class="text-danger">currentPage</td>
          <td class="text-danger">Number | String</td>
          <td>The current page number to display when the table is paginated. Starting from 1 and up</td>
        </tr>
        <tr>
          <td class="text-danger">perPage</td>
          <td class="text-danger">Number | String</td>
          <td>Number of rows to show per page. Set to 0 to disable pagination</td>
        </tr>
        <tr>
          <td class="text-danger">dark</td>
          <td class="text-danger">Boolean</td>
          <td>Places the table in dark mode</td>
        </tr>
        <tr>
          <td class="text-danger">cellVariants</td>
          <td class="text-danger">Object</td>
          <td>variants map to classes table-${variant}</td>
        </tr>
        <tr>
          <td class="text-danger">rowVariant</td>
          <td class="text-danger">String</td>
          <td>variants map to classes table-${variant}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    name: 'SBTableProperty',
  data() {
    return {
      state: {
        fields: [
          {id: 1, text: 'Property'},
          {id: 2, text: 'Type'},
          {id: 3, text: 'Description'}
        ]
      }
    }
  }
})
</script>

<style src="../public/bootstrap.css"></style>