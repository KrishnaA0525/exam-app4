import { HttpClient, HttpErrorResponse, HttpEventType } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Login } from "../model/login";

@Injectable({
	providedIn: "root"
})
export class LoginService {

	constructor(private http: HttpClient) {}

	getLoginDetails(hallticketNumber: number): any {
		let loginReq = {
			hallticket: hallticketNumber
		};
		// let url = "http://localhost:8082/loginservice/login";
		let url = "assets/mocks/mockLogin.json"
		/* return this.http.post<Login>(url, loginReq, {
			observe: "response"
		}); */

		return this.http.get(url, {
			observe: "response"
		})
	}
}