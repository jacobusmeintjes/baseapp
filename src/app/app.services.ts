import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from './model/menu.model';
import {HttpClient } from '@angular/common/http';

import * as menu from '../data/menu.json';

@Injectable()

export class MenuService {
    menuUrl = '/assets/menu.json';

    constructor(private _http: HttpClient) { }

    loadMenuItems(): Observable<MenuItem[]>  {

       return this._http.get(this.menuUrl);
    }

    translate(o: any) {
        console.log(o);
    }
}


