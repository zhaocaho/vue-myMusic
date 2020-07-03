// 格式化时间函数
const dataFormat = function(originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  // 需要加后面的时分秒再加
  // const hh = (dt.getHours() + '').padStart(2, '0')
  // const mm = (dt.getMinutes() + '').padStart(2, '0')
  // const ss = (dt.getSeconds() + '').padStart(2, '0')

  // return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
  return `${y}-${m}-${d} `
}

export default dataFormat
