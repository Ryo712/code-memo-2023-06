<!--
An example of creating a reusable grid component and using it with external data.
-->

<script setup>
import DemoGrid from './Grid.vue'
import { ref } from 'vue'

const searchQuery = ref('')
const gridColumns = ['name', 'power']
const gridData = [
  { name: 'Chuck Norris', power: Infinity },
  { name: 'Bruce Lee', power: 9000 },
  { name: 'Jackie Chan', power: 7000 },
  { name: 'Jet Li', power: 8000 }
]
</script>

<template>
  <form id="search">
    Search <input name="query" v-model="searchQuery">
  </form>
  <DemoGrid
    :data="gridData"
    :columns="gridColumns"
    :filter-key="searchQuery">
  </DemoGrid>
</template>

<!-- <form>タグ内には、検索フォームがあります。v-modelディレクティブを使用して、
検索クエリの入力値をsearchQueryにバインドしています。
つまり、入力された値はsearchQueryに自動的に反映されます。
-->

