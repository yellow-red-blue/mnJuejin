import {formatNumber} from "../../utils/util.js"
import {weekList} from "../../config.js"
export class Activeity {
  constructor(json) {
    this.name = json.title
    this.eventUrl = json.eventUrl
    this.city = json.city
    this.screenshot = json.screenshot
    this.time = this.getTime(json.startTime)
  }
  getTime(dateStr) {
    const dateObj = new Date (dateStr)
    const month = dateObj.getMonth() + 1
    const date = dateObj.getDate()
    const day = dateObj.getDay()
    const week = weekList[day]
    return `${formatNumber(month)}-${formatNumber(date)} ${week}`
  }
}