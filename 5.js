//テキストや画像の表示・非表示を切り替えるための構文
//データの中にtrueかfalseのどちらかを持つ変数を定義しておき，
//html側でv-if=変数名を適用させたい要素に付け加える
HTML
<p v-if=変数名>Hello</p>


html
<!DOCTYPE html>
<html lang="ja" dir="ltr">

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="">
  <title></title>
</head>

<body>
  <div id="app">
    <p v-if=displayTrue>Hello</p>
    <p v-if=displayFalse>Hello</p>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
</body>

</html>


JS
var app = new Vue({
  el: '#app',
  data: {
    displayTrue: true,
    displayFalse: false,
  }
})