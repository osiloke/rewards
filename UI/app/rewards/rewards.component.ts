/**
 * Created by prof on 11/16/16.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute,  NavigationEnd } from '@angular/router';
import { SystemService } from '../shared/system.service';


import 'rxjs/add/operator/filter';


@Component({
    moduleId: module.id,
    templateUrl: 'rewards.component.html'
})
export class RewardComponent implements OnInit, OnDestroy {
    activeMenu: string;
    titleMessage: string | number;

    constructor(private _route: ActivatedRoute, private _router: Router, private  _systemService: SystemService) {


    }

    isActiveMenu(menu: string): boolean {
        return this.activeMenu === menu;
    }

    ngOnInit() {
        this._router.events.subscribe((event) =>
        {
            if(event instanceof NavigationEnd) {
                if(this.activeMenu != event.urlAfterRedirects){
                    this.activeMenu = event.urlAfterRedirects;
                }
            }
        });

        this._systemService.getMessage().subscribe(msg => {this.titleMessage = msg.text;});
    }

    ngOnDestroy() {

    }

    setMessage(msg?: string | number) {
        this.titleMessage = msg;
    }
}