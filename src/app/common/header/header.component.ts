
import { Component, Input } from '@angular/core';
import { MenuItem } from '../../model/menu.model';

@Component({
    selector: 'header',
    templateUrl: 'header.component.html'
  })
  export class HeaderComponent {

      @Input() private menuItems: MenuItem[];

      constructor() {
      }
  }
