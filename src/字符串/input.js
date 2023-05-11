// const readline = require('readline')
import readline from 'readline'
const rl = readline.createInterface({
  input: process.stdin
})

const ghIn = (msg, cb) => {
  console.log(msg ?? '请输入内容：')
  rl.on('line', data => {
    // 用空隔分割
    // const list = data
    cb(data)
    process.exit(0)
  })
}
export default ghIn
