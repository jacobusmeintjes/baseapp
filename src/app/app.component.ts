import { Component, OnInit } from '@angular/core';
import { MenuService } from './app.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Base Angular Modular App';

  public menuItems: MenuService[];

  constructor(private menuService: MenuService) {

  }

  ngOnInit() {
    this.menuService.loadMenuItems().subscribe(result => this.convertResult(result));
  }

  convertResult(result) {
    this.menuItems = result;
  }
}
