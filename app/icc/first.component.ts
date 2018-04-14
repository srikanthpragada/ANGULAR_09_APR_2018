import { Component} from '@angular/core';

@Component({
    selector: 'st-first',
    template: `<h1>{{title}}</h1>
               <h3><st-second></st-second></h3>`
})
export class FirstComponent  {
    title = "First Component"
}
