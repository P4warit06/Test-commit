function TestSummArray(arr1) {
  if (arr1.length == 0 || !Array.isArray(arr1)) return undefined
  return arr1.reduce((sum, num) => sum + num, 0)
}
console.log(TestSummArray([2, 466, 8383]))
