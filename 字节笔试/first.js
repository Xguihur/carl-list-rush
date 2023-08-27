const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  numS = await readline()
  let num = parseInt(numS)
  // console.log(num)
  line = await readline()
  let tokens = line.split(' ')
  tokens.forEach(item => {
    item = parseInt(item)
  })
  // 输出结果
  console.log(solute(num, tokens))
})()

// 1. 先将非正常的情况排除，例如数组元素小于2直接返回0
// 2. 使用双指针进行遍历，每过一个数字就记录次数，当值相等时将次数与总值比较取最大的，继续向后遍历直到结束
// 3. 此时头指针继续向后移动，重复 2
// ------ 以上结果超时，可以考虑双指针不是快慢，而是头尾指针，从后往前进行遍历比较 60%
// 1. 固定头指针，尾指针向前遍历，向前移动一位 当前值-1，如果遇到相等的就将当前记录的值 与 总值 比较取最大，接着尾指针回到末尾，头指针向前移动一位，当前值-1
// 2. 当 头指针 等于 尾指针或者 当前值 小于 总值了，就结束遍历

// 核心代码
// const solute = (num,arr)=>{
//     // 个数小于3的直接返回 0
//     if(num<3){
//         return 0
//     }
//     let result = 0
//     let cur = num-2
//     let head=0
//     let tail=num-1
//     // 当头指针小于尾指针且当前值大于总值时才有必要继续比下去,如果等于尾指针就没必要比较了
//     while(head<tail&&cur>result){
//         if(arr[head]==arr[tail]){
//             result = max(cur,result)
//             // 结束循环，初始化条件
//             head++
//             tail = num-1
//             cur = num-2-head
//             continue
//         }
//         // 不相等的情况
//         tail-=1
//         cur-=1
//     }
//     return result
// }

// 比大小
const max = (cur, res) => {
  if (cur < res) {
    return res
  } else {
    return cur
  }
}
// 核心代码
const solute = (num, arr) => {
  // 个数小于3的直接返回 0
  if (num < 3) {
    return 0
  }
  let result = 0
  let cur = 0
  let fast
  let slow
  for (slow = 0; slow < num; slow++) {
    // 如果 快指针 的值相等，就拿中间值与结果比较取最大的，接着中间值+1，快指针继续向后走
    cur = 0
    for (fast = slow + 1; fast < num; fast++) {
      if (arr[slow] == arr[fast]) {
        result = max(cur, result)
      }
      cur++
    }
  }
  return result
}
