// 已知 一个数 k 在一个容器中，那么 k*2+1 以及 k*3+1 也在容器中。此时传入两个参数 k 和 target ，判断 target 是否也在容器中。
function equal(k, target) {
  if (target === k) return true
  let i = k * 2 + 1
  let j = k * 3 + 1

  return i == target || j == target
}

// 笔试的时候漏了 k 本身也在容器中，只顾着判断了 k*2+1 和 k*3+1。不过还算不冤枉，因为 k*2+1 和 k*3+1 都是需要递归的。这一步一开始就算漏了，刚开始有想到的，但测试完后就忘了。所以之后写之前不要急着写代码，而是先想清楚思路，各个细节处理好再写代码

// function equal(k, target) {
//   if (target === k) {
//       return true;
//   }

//   let i = k * 2 + 1;
//   let j = k * 3 + 1;

//   return (i === target || j === target) || (i < target && equal(i, target)) || (j < target && equal(j, target));
// }

// // 示例用法
// const k = 2;
// const target = 19;

// const result = equal(k, target);
// console.log(result);  // 输出 true
