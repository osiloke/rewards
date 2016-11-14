"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var DashBoardModule = (function () {
    function DashBoardModule() {
    }
    DashBoardModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'dashboard', component: dashboard_component_1.DashBoardComponent }
                ])
            ],
            declarations: [
                dashboard_component_1.DashBoardComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DashBoardModule);
    return DashBoardModule;
}());
exports.DashBoardModule = DashBoardModule;
//# sourceMappingURL=dashboard.module.js.map