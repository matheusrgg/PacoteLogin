import { Inject, Injectable } from '@angular/core';
import { Observable, BehaviorSubject, } from 'rxjs'

import { HttpClient } from '@angular/common/http';
import { map, shareReplay, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class AuthStore {

    private subject = new BehaviorSubject<any>(null);

    user$: Observable<any> = this.subject.asObservable();


    isLoggedIn$: Observable<boolean>
    isLoggedOut$: Observable<boolean>

    constructor(

        public http: HttpClient,
    ) {

        this.isLoggedIn$ = this.user$.pipe(map(user => !!user));
        this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));


    }

    login(username: any, password: any): Observable<any> {
        const url = 'http://localhost:4000/admin/login';
        return this.http.post<any>(url, {
            username: username,
            password: password
        }
            //pq eu fiz isso?
        ).pipe(
            tap(user => this.subject.next(user)),
            shareReplay()
        )
    }

    logout() {
        this.subject.next(null)
    }


}