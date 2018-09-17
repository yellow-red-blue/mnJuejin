export class BookList {
  constructor(json) {
    this.buyCount = json.buyCount
    this.lastSectionCount = json.lastSectionCount
    this.img = json.img
    this.title = json.title
    this.userName = json.userData.username
    this.price = json.price
    this.isBuy = json.isBuy
    this.id = json.id
  }
}