import { Component } from '@angular/core';

@Component({
    selector: 'st-binding',
    templateUrl: './binding.component.html',
    styleUrls: ['./binding.component.css']
})
export class BindingComponent {
    message = "Think Big. Start Small. Start Now!"
    ttype = "password"
    isMorning : boolean = false;

    constructor() { 
          var d = new Date()
          if (d.getHours() < 10)
             this.isMorning = true;
    }

    toggle() {
        if (this.ttype == "text")
            this.ttype = "password";
        else
            this.ttype = "text";
    }

}
