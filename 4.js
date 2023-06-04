//Mustache構文
<h1>{{ 変数名 }}</h1>　
//javascriptで定義した変数の内容をhtmlに埋め込む時に使う文法。{{ }}で変数名を囲う

<!DOCTYPE html>
<html lang="ja" dir="ltr">

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="">
  <title></title>
</head>

<body>
  <div id="app">
    <h1>{{ message }}</h1>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
</body>

</html>


//JS
var app = new Vue({
  el: '#app',
  data: {
    message: "Hello, Vue.js!",
  }
})