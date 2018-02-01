
import { Component, Input } from '@angular/core';
import { MenuItem } from '../../model/menu.model';

@Component({
    selector: 'menu',
    templateUrl: 'menu.component.html'
  })
  export class MenuComponent {

      @Input() private menuItems: MenuItem[];

      constructor() {
      }
  }
