// JSONはダブルクォートのみを許容するため、シングルクォートでJSON文字列を記述
const json = '{ "id": 1, "name": "js-primer" }';
const obj = JSON.parse(json);
console.log(obj.id); // => 1
console.log(obj.name); // => "js-primer"


const json = "[1, 2, 3]";
console.log(JSON.parse(json)); // => [1, 2, 3]
//文字列がJSONの配列を表す場合は、JSON.parseメソッドの返り値も配列になる。

const userInput = "not json value";
try {
    const json = JSON.parse(userInput);
} catch (error) {
    console.log("パースできませんでした");
}
//JSON.parseメソッドは基本的にtry...catch構文で例外処理をする。