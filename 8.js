<button v-on:ユーザからの入力種類="メソッド名">
 Click!
</button> //v-on構文。ユーザが所定の動作をした時に反応して何かしらの応答を返すための構文。

<!DOCTYPE html>
<html lang="ja" dir="ltr">

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="">
  <title></title>
</head>

<body>
  <div id="app">
    <button v-on:click="onclick">
    Click!
  </button>
    <p>
      {{now}}
    </p>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
</body>

</html>


//JS
var app = new Vue({
  el: "#app",
  data: {
    now: ""
  },
  methods: {
    onclick: function() {
      // 現在時刻をnowに代入
      this.now = new Date().toLocaleString();
    }
  }
});
//数値や文字列，配列といったデータをまとめておくdataと同じようにして
独自の挙動をfunction(関数)として定義することができるmethodsも一つにまとめることができると考える