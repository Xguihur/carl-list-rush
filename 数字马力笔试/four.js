function rgb2hex(sRGB) {
  // 填写JavaScript
  let arr1 = sRGB.split('(')
  let arr2 = arr1[1].split(')')[0]
  let arr = arr2.split(',')
  // // console.log(sRGB)
  if (Number(arr[0]) < 0 || Number(arr[0]) > 255) return sRGB
  if (Number(arr[1]) < 0 || Number(arr[1]) > 255) return sRGB
  if (Number(arr[2]) < 0 || Number(arr[2]) > 255) return sRGB
  let one = Number(arr[0]).toString(16)
  let two = Number(arr[1]).toString(16)
  let three = Number(arr[2]).toString(16)
  return `#${one}${two}${three}`
}
console.log(rgb2hex('rgb(255,255,255)'))
// rgb2hex(255)
