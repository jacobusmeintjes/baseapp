import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { MenuItem } from './model/menu.model';
import {HttpClient } from '@angular/common/http';

import * as menu from '../data/menu.json';

@Injectable()

export class MenuService {
    menuUrl = 'http://localhost:3000/api/menu';

    constructor(private _http: HttpClient) { }

    loadMenuItems(): Observable<MenuItem[]>  {

       return this._http.get<MenuItem[]>(this.menuUrl);
    }

    translate(o: any) {
        console.log(o);
    }
}


