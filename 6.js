//html 
<!DOCTYPE html>
<html lang="ja" dir="ltr">

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="">
  <title></title>
</head>

<body>
  <div id="app">
    <ol>
      <li v-for="color in colors">{{color}}</li>
    </ol>
    <hr>
    <ul>
      <li v-for="value in user">{{value}}</li>
    </ul>
    <hr>
    <ul>
      <li v-for="(value, key) in user">
        {{key}}: {{value}}
      </li>
    </ul>
    <hr>
    <p v-for="i in 10">{{ i }}</p>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
</body>

</html>

//JS
var app = new Vue({
  el: '#app',
  data: {
    colors: ['Red', 'Gree', 'Blue'],
    user: {
      firstName: 'Taku',
      lastName: 'Kuro',
      age: 20
    }
  }
})