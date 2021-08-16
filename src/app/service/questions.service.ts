import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Question } from "../model/question";

@Injectable(/* {
    providedIn: 'root'
} */)
export class QuestionsService {
    allQuestions: Question[] = [];
    inReviewCount: number = 0;
    allQuestionsSub = new Subject<Question[]>();
    questionSubject = new Subject<Question>();
    updateAnsSubject = new Subject<any>();
    questionIdSubject = new Subject<number>();
    isAutoSubmit: boolean = false;

    constructor (private httpClient: HttpClient) {}

    getAllQuestions() {
        //return this.httpClient.get<any>('assets/mocks/mockGetAllQuestionsDetails.json');
        /* return this.httpClient.get<any>('http://localhost:8082/questionsservice/allquestions', {
            headers: {
                
            }
        }); */
		let url = "assets/mocks/mockGetAllQuestionsDetails.json"
        return this.httpClient.get<any>(url);
    }

    getQuestion(id: number): Observable<any> {
        return this.getAllQuestions();
    }
}