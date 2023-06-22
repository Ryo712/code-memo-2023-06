<!--
We can render content conditionally or in a loop with the v-if and v-for directives.
-->

<script setup>
import { ref } from 'vue'

const show = ref(true)
const list = ref([1, 2, 3])
</script>

<template>
  <button @click="show = !show">Toggle List</button>
  <button @click="list.push(list.length + 1)">Push Number</button>
  <button @click="list.pop()">Pop Number</button>
  <button @click="list.reverse()">Reverse List</button>

  <ul v-if="show && list.length">
    <li v-for="item of list">{{ item }}</li>
  </ul>
  <p v-else-if="list.length">List is not empty, but hidden.</p>
  <p v-else>List is empty.</p>
</template>

<!-- v-else-ifは、前の条件が偽であり、新しい条件が真の場合に表示されます。具体的には、
list.lengthが0より大きい（つまり、リストが空でない）場合に表示されるメッセージです。
この場合、「リストは空ではありませんが、非表示です。」というメッセージが表示されます。
v-elseは、前の条件が偽の場合に表示されます。つまり、list.lengthが0である（
つまり、リストが空である）場合に表示されるメッセージです。
この場合、「リストは空です。」というメッセージが表示されます。 -->