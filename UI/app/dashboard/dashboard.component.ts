import { Component, OnInit  } from '@angular/core';

import { SystemService } from '../shared/system.service';


@Component({
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})
export class DashBoardComponent implements OnInit{

    constructor(private _systemService: SystemService){

    }

    ngOnInit() {
        this._systemService.setTitle("Dashboard");
    }
}