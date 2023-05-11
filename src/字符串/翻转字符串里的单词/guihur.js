// 给你一个字符串 s ，请你反转字符串中 单词 的顺序。
// 单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。
// 返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。
// 注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。

// 卡尔的解题思路：他要求不要使用 split 库函数的额外空间，而是使用 O(1) 的空间复杂度去完成，感受这道题的意义
// 这里面有三个难点：
// 1. 字符串的头、中间、以及尾部可能会出现多余的空格，如何处理这些空格是一个最难的难点（这里的算法用到了：移除指定元素 那题中的思想，使用快慢指针的方式将多余的空格替换掉，最后返回slow指向的位置表示字符串的长度，多余的都是空格可以不用了）
// 2. 解题思路是：先翻转去除了多余空格的字符串，再将每个单词进行一次翻转就完成了。所以需要进行一次所有字符串的翻转
// 3. 第三个难点是将每个单词进行翻转，卡尔封装了一个函数进行处理，传入字符串、起始位置、结束位置，然后对字符串进行翻转

// 总结：
// 看完网站学完之后，分了步骤实现案例，还是有很多细节没有考虑到！但是一次又一次的 debugger 还是解决了！未来再看这题的时候不要觉得有多牛，就是错的多罢了

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // 先转化字符串为数组
  const arr = Array.from(s)
  // 接着清除空格 --》 翻转整个数组 --》 翻转单词
  clearBlank(arr)
  reverse(arr, 0, arr.length - 1)

  let index = 0
  // 这里只能用 小于等于，不能只用 小于。因为 if 里面的第二个判断需要 i === arr.length,而这又是因为 reverse 是左闭右闭的！
  for (let i = 0; i <= arr.length; i++) {
    // 如果遇到空格，就将前面的单词翻转！只可能出现一个空格
    if (arr[i] === ' ' || i === arr.length) {
      //不要少了最后一个单词的翻转
      reverse(arr, index, i - 1)
      index = i + 1
      i++ //这里算是一个小剪枝，因为 i 不必和 index 指向同一个位置，新的 index 那里肯定是不为空的
    }
  }
  // 最后返回一个字符串出去
  return arr.join('')
}
// 首先封装个清除多于空格的函数(最难的难点)
// 传入一个参数是数组,直接修改原数组
const clearBlank = s => {
  let slow = 0
  let fast = 0
  while (fast < s.length - 1) {
    // 如果字符串为空，判断他的位置是不是在最开始，如果是就删除，如果不是再判断它前面一个是不是空，如果不为空就跳过，为空就删除
    if (s[fast] === ' ' && (fast === 0 || s[fast - 1] === ' ')) {
      fast++
      continue
    } else {
      // 否则就是合法的，fast 的值给到 slow ，slow 和 fast 共同前进
      // s[slow] = s[fast]
      // slow++
      // fast++
      s[slow++] = s[fast++]
    }
  }
  // 最后修改数组的长度，这里的取法也有讲究，不能直接取 slow 指向的位置，还得判断最后一个是否为空
  s.length = s[slow] === ' ' ? slow : slow + 1
}

// 接着封装一个翻转数组的函数,左闭右闭的一个函数，并且也是修改原数组
const reverse = (s, start, end) => {
  // 用双指针实现翻转数组
  let temp
  let left = start
  let right = end

  for (left; left < right; left++, right--) {
    temp = s[left]
    s[left] = s[right]
    s[right] = temp
  }
}

// 测试用例
const s = 'the sky is blue'
console.log(reverseWords(s))
