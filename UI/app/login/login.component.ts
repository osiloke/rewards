import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
export class LoginComponent {

    model: any = {};

    constructor(private _router: Router,){

    }

    login() {
        console.log(JSON.stringify(this.model))
        this._router.navigate(['/rewards/']);
    }
}