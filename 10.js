if (true) {
    let monaca = 'Monaca'
    console.log(monaca)
    // => Monaca
  } else {
    console.log(monaca)
    // => Uncaught ReferenceError: monaca is not defined
  }
  console.log(monaca)
  // => Uncaught ReferenceError: monaca is not defined
//let は変更できる変数を定義する。
//ブロック外には影響しないので、
//自分が期待している場所以外では利用できない形に制御できる

function Hello() {
    let monaca = 'Monaca'
    console.log(monaca)
    // => Monaca
  }
  Hello()
  console.log(monaca)
  // => Uncaught ReferenceError: monaca is not defined
//そして、
//letで定義された変数は上書きできる。

function Hello() {
    let monaca = 'Monaca'
    console.log(monaca)
    // => Monaca
    monaca = 'Changed'
    console.log(monaca)
    // => Changed
  }
  Hello()
  console.log(monaca)
  // => Uncaught ReferenceError: monaca is not defined
//基本的に、従来varで定義していたものは
//letに置き換えできるでしょう。  