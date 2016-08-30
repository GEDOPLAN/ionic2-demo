import {Component, Input} from '@angular/core'


@Component({
  templateUrl: 'build/components/menu/menu.component.html',
  styleUrls: ['build/css/components/menu/menu.component.css'],
  selector: 'app-menu'
})
export class MenuComponent{
 
    @Input("title")
    title:string;
}