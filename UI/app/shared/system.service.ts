/**
 * Created by prof on 11/16/16.
 */
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SystemService {

    private subject = new Subject<any>();

    setTitle(msg: string){
        this.subject.next({text:msg});
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

}


