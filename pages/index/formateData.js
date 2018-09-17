import {formateTime} from "../../utils/tool.js"
import {labelColor} from "../../config.js"
export class Recommend {
  constructor(json) {
    this.title = json.title
    this.categoryName = json.category.name
    this.username = json.user.username
    this.viewsCount = json.viewsCount
    this.publishTime = json.verifyCreatedAt
    this.id = json.objectId
    this.type = json.category.name
    this.typeCls = labelColor[json.category.name]
    this.time = formateTime(json.verifyCreatedAt)
  }

}