// <!DOCTYPE html>
// <html>

// <head>
//     <meta charset="UTF-8">
//     <style>
//        /* 填写样式 */
//         .content{  font-size: 14px;}
//         .content em{  font-style: normal;    color: #c00;}
//     </style>
// </head>

// <body>
//     <!-- 填写标签 -->
//     <div class="content" id="jsContent">
//         <em>前端开发</em>
//         是创建Web页面或app等
//         <em>前端</em>界面呈现给用户的过程，通过HTML，CSS及JavaScript以及衍生出来的各种技术、框架、解决方案，来实现互联网产品的用户界面交互。它从网页制作...
//     </div>
//     <script type="text/javascript">
//         // 填写JavaScript
//         function highlight(word) {

//         }
//     </script>
// </body>

// </html>
// 填写JavaScript
function highlight(word) {
  if (word) {
    // 1. 将 word 拆分成多个连续组合
    // 2. 在 文章中匹配 这些组合，先匹配到的就使用 <em>内容</em> 进行替换
    const arr = Array.from(word) //获取到每一个 word
    const set = new Set() //hash表
    let i = arr.length
    while (i > 0) {
      let data = ''
      for (let j; j < i; j++) {
        data += arr[j]
      }
      set.add(data)
    }
    //  此时set中已经包含所有的匹配项
    // 使用双指针遍历文章，快慢指针一起走，当慢指针找到第一个匹配项时，慢指针不走，快指针走，结合 hash 表判断替换多少个元素
    // 获取节点和内容
    const node = document.querySelector('#jsContent')
    let content = node.content
  }
}
