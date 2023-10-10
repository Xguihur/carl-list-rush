

## 反转字符串

### [LeetCode 题目：](https://leetcode.cn/problems/reverse-string/)

`编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。` 

`你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。`

**使用双指针实现原地反转，操作字符串即可，无需转为数组**

1. 最神奇的是不需要转化为数组就能直接操作，潜意识还是 java 的思维，看来是需要多刷  JS 了
2. 字符串 的交换以及遍历值得尝试

> 解题思路

1. 定义双向指针，循环遍历字符串
2. 交换字符串的元素
3. 循环条件：letf < right 时就进行循环，因为 等于 表示奇数长度，大于表示偶数长度

```javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
	let left = 0
    let right = s.length-1
    while(left < right){
        const temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right--
    }
};
----------------------------看到一种骚操作-----------------------
var reverseString = function(s) {
	let left = 0
    let right = s.length-1
    while(left < right){
        [s[left],s[right]] = [s[right],s[left]]
        left++
        right--
    }
};    
-----------------------------更简洁的骚操作-----------------------
var reverseString = function(s) {
	 let l = -1, r = s.length;
    while(++l < --r) [s[l], s[r]] = [s[r], s[l]];
};    
```

> 总结：

1. 字符串的操作和数组一样，直接使用索引调用即可，不用这么复杂的转化为数组再换回字符串

---
## 反转字符串||

### [LeetCode 题目：](https://leetcode.cn/problems/reverse-string-ii/)

`给定一个字符串 s 和一个整数 k，从字符串开头算起, 每计数至 2k 个字符，就反转这 2k 个字符中的前 k 个字符。`

**这题比较符合算法题了**

1. 一开始实在是不知道如何写，真的想着遍历 2k 个元素，但又考虑到不够 2k 怎么办，然后感觉脑子死机了转不了了
2. 实际上用笔和纸模拟一下就能发现规律：
   1. 具体操作是反转字符串，把前 k 个字符串进行反转，如果不够 k 个就剩下几个都反转，如果够 k 个，不管够不够 2k 个都把 前 k 个反转一下
   2. 如果是自己去调整 **i --> k --> 2k** 这种步骤，就会十分复杂，这也是一开始的思维。 i 到 k 中间的操作处理和特殊情况需要考虑， k到 2k 又要处理操作，这就很难写出来了
   3. 但仔细分析能发现，它其实就是把字符串分成一段一段的，每一段 2k，处理这 2k 中前 k 个即可。注意就变成了 **i --> 2k (包含 k)**
3. 就算知道了是分段，按自己的思维还是会把问题复杂化，这也是在做算法笔试的时候犯的错误：
   1. 我会先把它分段，然后处理最后一段特殊情况
   2. 分好段后再遍历每一段，做处理
4. 但是实际上不需要把这两步分开，而是分一段处理它，处理完再分一段！就这样。（也是思维的转化）

> 解题思路

1. 遍历字符串，按照 2k 为自增步数，在每次循环中做操作
2. 操作为：
   1. 判断 i+k 是否小于 字符串长度
   2. 如果小于表示没有越界，反转前k个字符
   3. 如果大于或者等于了，表示剩下的字符已经不满足 k 个了，全部反转即可
3. 反转的操作可以使用库函数，这不影响 核心算法，不算犯规！

```javascript
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const s = 'abcdefg'
const k = 2
var reverseStr = function (s, k) {
  s = s.split('')// 这题如果不转化为数组就会报错，不知道为啥！
  for (let i = 0; i < s.length; i += 2 * k) {
    if (i + k < s.length) {
      //反转字符串
      let l = i - 1,
        r = i + k
      while (++l < --r) [s[l], s[r]] = [s[r], s[l]]
    } else {
      let l = i - 1,
        r = s.length
      while (++l < --r) [s[l], s[r]] = [s[r], s[l]]
    }
  }
  return s.join('')
}
console.log(reverseStr(s, k))
```

> 总结：

1. 反转字符串的骚操作得学会来，真的很酷！

   1. 自己写到这一步的时候想着去找库，但又不知道有哪些库，又不想去自己写反转字符串，就卡住了

   2. 实际上自己写反转字符串非常方便，记住这个骚操作

   3. ```javascript
      // 双指针 + 字符串遍历 + 字符串交换
      let l = -1
      let r = s.length
      while(++l < --r) [s[l],s[r]] = [s[r],s[l]]
      ```

   4. 写这题的时候也会遇到一些思维上的限制，这题和之前的反向思维不不一样，这题需要的是跳跃的思维，看到本质其实是分段处理！

   5. 写的时候正常写就好，出了 bug Copy 到 Vscode 中，加入一个用例，调用函数快速定位问题就好！！！！！

   6. 为什么这题不转换为数组就做不了呢？不转换为数组就报错无法执行，为什么？

      1. 报错：`TypeError: Cannot assign to read only property '0' of string 'abcdefg'` 
      2. 为什么 字符串转化 的骚操作 中又能直接转化呢？
         1. 在 VScode 中试了一下，这个也是不行了
         2. 但在 LeetCode 中这题能过，反转|| 就过不了。只能说是 LeetCode 的问题了，或许 反转|| 需要 return 了需要严谨一些吧
         3. 以后在笔试中还是转化为数组再操作吧，这样稳定性高一些

   7. 最后不要忘记 return 字符串出去了，如果转化为数组那就记得转化回去：

      1. 字符串转数组：str.split('')   ||   Array.from(arr)
      2. 数组转字符串：arr.join('') 

   8. **Tips：当需要固定规律一段一段去处理字符串的时候，要想想在在for循环的表达式上做做文章。**

---
## 替换空格

### [LeetCode 题目：](https://leetcode.cn/problems/ti-huan-kong-ge-lcof/)

`请实现一个函数，把字符串 s 中的每个空格替换成"%20"。`

`在数字马力的笔试中也遇到了类似的，可以尝试使用正则的方式解题`

`LeetCode 中这题已经变了，可能是更新后换了，学一下这个思想也可以，自己知道怎么做就好！`

**如果新增正则的话，有两种方法**

* 卡哥的不使用额外空间的方法
  * 首先将数组扩充到目标长度（需要一次遍历获取替换字符以计算新数组长度）
  * 使用双指针，从后往前遍历，一个是当前数组尾部，一个是新数组尾部
  * 两个指针一起走，将值往后移，如果匹配到目标元素，尾指针做对应操作
  * 当 两个指针重合 表示遍历完毕，这时可以退出循环返回结果了
* 自己使用正则的练习方法
  * 暂无头绪

> 解题思路
**双指针**

```javascript
/**
 * @param {string} s
 * @return {string}
 */
let s = 'abc bba cds'
var replaceSpace = function (s) {
  // 不要忘了字符串转数组
  let arr = s.split('')
  // 获取长度
  let size = 0
  for (let i of arr) {
    if (i === ' ') {
      size += 3
    } else {
      size++
    }
  }
  let left = arr.length - 1
  let right = size - 1
  // 遍历替换值
  for (left; left < right; left--) {
    // 这里使用 left < right 作为循环条件，算是一个剪枝了
    if (arr[left] === ' ') {
      arr[right--] = '0'
      arr[right--] = '2'
      arr[right--] = '%'
    } else {
      arr[right--] = arr[left]
    }
  }
  return arr.join('')
}
console.log(replaceSpace(s))

```

---

**ChatGPT给的方法，合理利用 JS 语言，是一个新思路，合理利用JS的特性**

```javascript
function replaceSpaces(s) {
  // 创建一个新的字符串，用于存储替换后的结果
  let result = '';

  // 遍历输入字符串的每个字符
  for (let i = 0; i < s.length; i++) {
    // 如果当前字符是空格，将"%20"添加到结果字符串中
    if (s[i] === ' ') {
      result += '%20';
    } else {
      // 如果不是空格，直接添加当前字符到结果字符串中
      result += s[i];
    }
  }

  return result;
}

// 示例用法
const inputString = "Hello World";
const replacedString = replaceSpaces(inputString);
console.log(replacedString); // 输出 "Hello%20World"
```

---

**正则表达式的方法**

```javascript
你可以使用正则表达式来实现将字符串中的空格替换成 "%20"。在 JavaScript 中，你可以使用 String.prototype.replace() 方法来执行这个替换操作。以下是一个使用正则表达式的示例实现：

function replaceSpacesWithRegex(s) {
  // 使用正则表达式将字符串中的空格替换为 "%20"
  return s.replace(/ /g, "%20");
}

// 示例用法
const inputString = "Hello World";
const replacedString = replaceSpacesWithRegex(inputString);
console.log(replacedString); // 输出 "Hello%20World"

在这个示例中，我们使用 / /g 正则表达式来匹配所有的空格，并将其替换为 "%20"。这个方法更简洁，但需要注意的是，正则表达式可能在处理非常大的字符串时性能略低于基于循环的方法。因此，你可以根据具体情况选择使用哪种方法。
```

> 总结

1. 注意转换 字符串 为 数组 进行操作，后面的 for 循环可以使用 while 代替的
2. 这个剪枝处理的很妙，比题解的多一些优化了，可惜没有 力扣 原题 不好验证，理论上是没问题的
3. 这题的思路可以学习一下：**很多数组填充类的问题，都可以先预先给数组扩容带填充后的大小，然后在从后向前进行操作。**
4.  正则表达式
   1. 使用 字符串 的原型方法 replace 实现正则匹配，这个得学会
   2. `s.replace(/ /g, "%20");` 
   3. 第一个参数用 **/** 表示后续的是 要匹配的元素，以上给的是一个 空格
   4. **/g** 表示全局匹配， **/i** 表示忽略大小写，仅剩的一些记忆
   5. 第二个参数是要替换成的样子

---
## 翻转字符串里的单词
> （比较有技巧性，有意思）
---
## 左旋转字符串
> （把前k个字符移到尾部）
---
## 实现 strStr()
> （找到字符串中子串的第一个出现位置，这个还是比较有意思的）
---
## 重复的子字符串
> （由子串重复构成的主字符串，比较少考，印象也不深刻）
---
## 总结
> （实际上对字符串的操作还是会转变为对数组的操作）
---

