// 这题 100% 的通过率，爽歪歪！！！好激动啊！！！
// 做题之前用了和之前上班的思考方式，看明白题目要求以及函数的参数、返回值。
// 接着看着示例的输入输出，想着使用 双指针的方式去实现，然后看着示例推演很多细节，直到脑子里推演通过了后，确定了几个关键的点，例如 指针的初始化，循环的条件，循环内部的处理等等。也有没考虑到的地方，比如 while 内部还需要一个 for 循环一开始没想到，后面思考了一下才改对！
// 后面测试只有 40% 通过率的时候就在思考是不是还有什么用例没通过，都打算就这样算了的，但再 推演了一下用例，发现取余的地方不应该限制是 8 ，而是加上 width 因素，这样才是完美的分组进行循环！！！

// 之所以能改一下就能改对，很大原因是因为一开始的思路没有错，这样花时间改是有几率改对的，但如果一开始思路就不对或者题目没看清楚只会浪费时间越来越紧张！

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param width int整型
 * @param pixels int整型一维数组
 * @return int整型一维数组
 */
function flipImage(width, pixels) {
  // write code here
  // 几个关键点：
  //     拿到有几组数据，需要进行几次循环，通过 pixels.length / 8 向下取整可以得出，一开始以为是 / 4，但实际需要 / 8才合适
  //     left 初始化时的取值：i * width * 4
  //     right 初始化时的取值：i+1 * width *4 - 4

  //     每次循环i的内部还有一个 while ，就是调换两个指针指向的值，当两个指针相等 或者 right < left 时退出 while

  //     最终 return 数组出去
  8
  const length = Math.floor(pixels.length / (width * 4)) // 这样取余可能不太合适，还需要加上 width 的因素
  let left
  let right
  let temp
  for (let i = 0; i < length; i++) {
    left = i * width * 4
    right = (i + 1) * width * 4 - 4
    // 开始循环交换
    while (left < right) {
      // left >= right 就退出循环
      // 交换四个数字
      for (let j = 0; j < 4; j++) {
        temp = pixels[left]
        pixels[left] = pixels[right]
        pixels[right] = temp
        left++
        right++
      }
      // 此时重置 left 和 right
      right -= 8 // left 保持前进即可，right 要回退8位到下一个位置进行交换
    }
  }
  return pixels // 40% 的通过率，看看是不是边界没处理好
}
module.exports = {
  flipImage: flipImage
}
