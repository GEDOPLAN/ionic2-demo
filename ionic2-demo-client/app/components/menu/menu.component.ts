import {Component, Input} from '@angular/core'


@Component({
  templateUrl: 'build/components/menu/menu.component.html',
  selector: 'app-menu'
})
export class MenuComponent{
 
    @Input("title")
    title:string;  
}