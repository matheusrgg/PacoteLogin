import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import jwt_decode from "jwt-decode";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private encodedToken: string | null = null;
    private readonly tokenKey = 'authToken';


    constructor(
        public http: HttpClient,
    ) {
        this.checkExistingToken();
    }

    private checkExistingToken() {
        if (sessionStorage.getItem(this.tokenKey)) {
            this.encodedToken = sessionStorage.getItem(this.tokenKey);
        }
    }


    public setToken(encodedToken: string): void {
        this.encodedToken = encodedToken;
        sessionStorage.setItem(this.tokenKey, encodedToken);
    }

    public getToken(): string | null {
        return sessionStorage.getItem(this.tokenKey);
    }

    public removeToken(): void {
        this.encodedToken = null;
        sessionStorage.removeItem(this.tokenKey);
    }

    public isLoggedIn(): boolean {
        return !!this.getToken();
    }

    public get token() {
        return this.encodedToken;
    }

    public get currentUser() {

        if (!this.encodedToken) {
            throw Error(`No logged user`)
        }
        return jwt_decode(this.encodedToken) as any;
    }

}