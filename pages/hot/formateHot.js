import {formateTime} from "../../utils/tool.js"
export class Hot {
  constructor(json) {
    this.avatar = json.user.avatarLarge
    this.username = json.user.username
    this.updatedAt = json.updatedAt
    this.content = json.content
    this.pictures = json.pictures
    this.jobtitle = json.user.jobTitle || ''
    this.time = formateTime(json.updatedAt)
  }
}