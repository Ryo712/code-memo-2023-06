let x = 0;
console.log(`ループ開始前のxの値: ${x}`);
while (x < 10) {
    console.log(x);
    x += 1;
}
console.log(`ループ終了後のxの値: ${x}`);
//xの値が10未満であるなら、コンソールへ繰り返しログが出力される。
// また、実行する文にて、xの値を増やし条件式がfalseとなるようにしています。

const x = 1000;
do {
    console.log(x); // => 1000
} while (x < 10);
//do while文。　while文とは異なり、必ず最初に実行する文を処理する
//そのためxの値、1000が実行される。

//for文
function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

console.log(sum([1, 2, 3, 4, 5, 6]));
//任意の数値が入った配列を受け取り、その合計値を返す sum 関数を実装している。 
//numbers配列に含まれている要素を先頭から順番に変数totalへ加算することで合計値を計算している。