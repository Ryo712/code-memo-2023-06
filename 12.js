//ある数の集合の中で最大の数を見つけるMath.max関数
//昔↓
const ary = [1, 3, 10, 4, 5]
Math.max.apply(null, ary)

//モダンな書き方
Math.max(...ary)
//=> 10

