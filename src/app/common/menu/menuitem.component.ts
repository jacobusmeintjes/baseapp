
import { Component, Input } from '@angular/core';
import { MenuItem } from '../../model/menu.model';

@Component({
    selector: 'menu-item',
    templateUrl: 'menuitem.component.html'
  })
  export class MenuItemComponent {

      @Input() private menuItem: MenuItem;

      constructor() {
      }
  }
