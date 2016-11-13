import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';


import { DashBoardComponent } from './dashboard.component';
import { AppGuard } from '../app-guard.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'dashboard', component: DashBoardComponent }
        ])
    ],
    declarations: [
        DashBoardComponent
    ]
})
export class DashBoardModule {

}