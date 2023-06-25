<!--
Here we show the simplest possible component which accepts a prop and renders it.
Learn more about components in the guide!
-->

<script setup>
import { ref } from 'vue'
import TodoItem from './TodoItem.vue'

const groceryList = ref([
  { id: 0, text: 'Vegetables' },
  { id: 1, text: 'Cheese' },
  { id: 2, text: 'Whatever else humans are supposed to eat' }
])
</script>

<template>
  <ol>
    <!--
      We are providing each todo-item with the todo object
      it's representing, so that its content can be dynamic.
      We also need to provide each component with a "key",
      which is explained in the guide section on v-for.
    -->
    <TodoItem
      v-for="item in groceryList"
      :todo="item"
      :key="item.id"
    ></TodoItem>
  </ol>
</template>
<!-- 各 TodoItem コンポーネントには、:todo 属性を通じて現在のアイテムを渡しています。
この属性は、TodoItem コンポーネント内で使用されるプロパティとして定義されます。
また、:key 属性には、各アイテムの id を指定しています。
これにより、Vueがリスト内の要素を一意に識別し、効率的な更新を実現します。
 -->