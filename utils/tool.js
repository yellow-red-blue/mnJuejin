export function formateTime (dateStr) {
  const nowDate = new Date()
  const year = nowDate.getFullYear()
  const month = nowDate.getMonth() + 1
  const day = nowDate.getDate()
  const hour = nowDate.getHours()
  const minute = nowDate.getMinutes()
  const second = nowDate.getSeconds()
  const verifyMonth = new Date(dateStr).getMonth() + 1
  const verifyYear = new Date(dateStr).getFullYear()
  // 距离一个月前的时间戳
  const monthTimeStamp = new Date(`${year}/${month - 1}/${day} ${hour}:${minute}:${second}`).getTime()
  // 距离一年前的时间戳
  const yearTimeStamp = new Date(`${year -1}/${month}/${day} ${hour}:${minute}:${second}`).getTime()
  const nowDateStamp = nowDate.getTime()
  const publishDateStamp = new Date(dateStr).getTime()
  const timeStamp = nowDateStamp - publishDateStamp
  const secondMinTime = 1000
  const secondMaxTime = 60 * 1000
  const minutesMaxTime = 60 * 60 * 1000
  const hourMaxTime = 24 * 60 * 60 * 1000
  const dayMaxTime = nowDateStamp - monthTimeStamp
  const monthMaxTime = nowDateStamp - yearTimeStamp
 if (timeStamp < secondMaxTime) {
    return `${Math.ceil(timeStamp / secondMinTime)}秒前`
  } else if (timeStamp >= secondMaxTime && timeStamp < minutesMaxTime) {
    return `${Math.ceil(timeStamp / secondMaxTime)}分前`
  } else if (timeStamp >= minutesMaxTime && timeStamp < hourMaxTime) {
    return `${Math.ceil(timeStamp / minutesMaxTime)}小时前`
  } else if (timeStamp >= hourMaxTime && timeStamp < dayMaxTime) {
    return `${Math.ceil(timeStamp / (24 * 60 * 1000 * 60))}天前`
  } else if (timeStamp >= dayMaxTime && timeStamp < monthMaxTime) {
    return `${Math.ceil(timeStamp / (30 * 24 * 60 * 1000 * 60))}月前`
  } else if (timeStamp > monthMaxTime) {
    return `${year - verifyYear}年前`
  }
}