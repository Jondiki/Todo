import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:3000/api';

    constructor(private http: HttpClient) { }

    register(userData: any) {
        return this.http.post(`${this.apiUrl}/register`, userData);
    }

    login(userData: any) {
        return this.http.post(`${this.apiUrl}/login`, userData);
    }
}