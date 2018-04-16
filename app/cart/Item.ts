export class Item {

    constructor(public id: number,
                public name: string, 
                public price: number, 
                public qty: number,
                public giftWrap: boolean = false) {

    }
}