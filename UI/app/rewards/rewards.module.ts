/**
 * Created by prof on 11/16/16.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';


import { RewardComponent } from './rewards.component';
import { DashBoardComponent } from "../dashboard/dashboard.component";
import { UserComponent } from "../users/user.component";
import { SystemService } from "../shared/system.service";

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild([
            { path: 'rewards', component: RewardComponent,
                children:[
                    { path: 'dashboard', component: DashBoardComponent},
                    { path: 'users', component: UserComponent},
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
                ]}
        ])
    ],
    declarations:[
        RewardComponent,
        DashBoardComponent,
        UserComponent
    ],
    providers:[
        SystemService
    ]
})
export class RewardModule {

}
