function 기계(구멍) {
  this.q = 구멍;
  this.w = "snowball";
}

let nunu = new 기계("consume");
//기계 {q: 'consume', w: 'snowball'}
let garen = new 기계("strike");
//기계 {q: 'strike', w: 'snowball'}

class Hero {
  constructor(구멍) {
    this.q = 구멍;
    this.w = "snowball";
  }
}
