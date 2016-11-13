import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule} from '@angular/router';

import { UserCompoent } from './user.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'users', component: UserCompoent }
        ]),
        
    ],
    declarations: [
        UserCompoent
    ],
    schemas:[
        CUSTOM_ELEMENTS_SCHEMA
    ]

})
export class UserModule {

}