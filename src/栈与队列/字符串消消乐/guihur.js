// 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
// 在 S 上反复执行重复项删除操作，直到无法继续删除。
// 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。

// 题解：
// 卡哥给了两个方法，一个是使用 栈 来匹配字符串，重复的就出栈。第二个方法是双指针法，快指针一直向前，慢指针控制实际元素。后者仔细一想实际上就是模拟了栈的实现，用慢指针来替代栈顶指针！
/**
 * @param {string} s
 * @return {string}
 */
// 栈的方法
var removeDuplicates = function (s) {
  const arr = Array.from(s)
  const stack = []
  for (let i = 0; i < arr.length; i++) {
    if (!stack || stack[stack.length - 1] != arr[i]) {
      stack.push(arr[i])
    } else {
      stack.pop()
    }
  }
  // 将栈中的元素直接转化成字符串
  return stack.join('')
}

// 双指针方法
var removeDuplicates1 = function (s) {
  const arr = Array.from(s)
  let slow = 0,
    fast = 0

  while (fast < s.length) {
    arr[slow] = arr[fast]
    if (arr[slow] === arr[slow - 1]) {
      slow--
    } else {
      slow++
    }
    fast++
  }
  if (slow === 0) return ''
  // splice是左闭右开，且不是纯函数以及返回修改后的数组，可以链式调用
  else return arr.splice(0, slow).join('')
}

console.log(removeDuplicates(''))
