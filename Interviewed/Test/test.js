const arrs = [4, 1, 3, 28, 9, 17, 14, 19, 22, 8]
// 左闭右闭
const quickSort = (arr, left, right) => {
  let l = left
  let r = right
  if (l >= r) {
    return
  }

  const pivot = arr[l]
  while (l < r) {
    // 只有 l = r 或者 arr[r] 的值小于 pivot 时才结束循环
    while (l < r && arr[r] >= pivot) {
      r--
    }
    if (l < r) {
      // 这个判断表示该将右侧的值插入到左侧的坑了
      arr[l] = arr[r]
    }
    while (l < r && arr[l] <= pivot) {
      // 只有 l = r 或者 arr[r] 的值大于 pivot 时才结束循环
      l++
    }
    if (l < r) {
      // 这个判断表示该将左侧的值插入到右侧的坑了。
      // 此时右侧的指针虽然指向是有值的，但是那个值可以被覆盖，相当于是一个坑了！
      arr[r] = arr[l]
    }
    if (l == r) {
      arr[l] = pivot
      // 当指向了这行代码时，表示这一轮的排序完毕，Pivot 左右两侧的值都符合规则
    }
  }
  // 递归指向函数，将 Pivot 左侧的数组和 Pivot 右侧的数组继续排序
  quickSort(arr, left, l - 1) // Pivot 左侧的部分进行递归
  quickSort(arr, l + 1, right) // Pivot 右侧的部分进行递归
}

// 执行查看结果
quickSort(arrs, 0, arrs.length - 1)
console.log(arrs)
