function calc(a, b) {
  a = parseInt(a)
  b = parseInt(b)
  return a + b
}

// Process the input
const { count } = require('console')
var fs = require('fs')
var buf = ''

// 处理输入
process.stdin.on('readable', function () {
  var chunk = process.stdin.read()

  if (chunk) buf += chunk.toString()
})

// 处理输出
process.stdin.on('end', function () {
  buf.split('\n').forEach(function (line) {
    var tokens = line.split(' ')
    console.log(tokens.reduce(calc))
  })
})
