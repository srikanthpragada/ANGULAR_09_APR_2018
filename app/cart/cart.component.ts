import { Component , OnInit } from '@angular/core';
import { Item } from './Item';

@Component({
    selector: 'st-cart',
    templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
    cart : Item[];
    total : number;

    ngOnInit() {
        this.cart = [ new Item(1, "Angular Cookbook", 450, 1),
                      new Item(2, "Angular In Action", 600, 2)];
        this.calculateTotal();
    }

    calculateTotal() {
        this.total = 0;
        for (var item of this.cart) {
            this.total += (item.price * item.qty) + ( item.giftWrap ? 100  : 0);
        }
    }

    deleteItem(id: number) {
        // take confirmation
        var result = confirm("Do you really want to delete??");
        if (!result)
            return;

        // find position of the item in the cart and delete from cart
        for (var i = 0; i < this.cart.length; i++) {
            var item = this.cart[i];
            if (item.id == id) {
                this.cart.splice(i, 1);  // remove element 
                this.calculateTotal();
                break;
            }
        }
    }

}