import {Component, OnInit  } from '@angular/core';

import { SystemService } from '../shared/system.service';


@Component({
    moduleId: module.id,
    templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit{

    constructor(private _systemService: SystemService){

    }

    ngOnInit() {
        this._systemService.setTitle("Users Profile");
    }
}