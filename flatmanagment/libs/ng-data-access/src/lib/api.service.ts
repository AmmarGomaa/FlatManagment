import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoggerUtil } from '@flatmanagment/ng-shared';
import { environment} from 'environments/environment'
//import { LoadingCursorService } from './loadingCursor.service'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private logger: LoggerUtil) {}

  private formatErrors(error: any) {
    this.logger.error('Error Happened in ApiService instance');
    this.logger.error(error);
    return throwError(error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http
      .get(`${environment.apiURL}${path}`, { params })
      .pipe((data) => {
        //console.log(path);
        //this.loadingCursor.removeService();
        return data;
      });
  }

  put(path: string, body: any = {}): Observable<any> {
    return this.http
      .put(`${environment.apiURL}${path}`, JSON.stringify(body))
      .pipe(catchError(this.formatErrors));
  }

  post(
    path: string,
    body: any = {},
    handleResult: boolean = true
  ): Observable<any> {
    this.logger.log(path + 'Calling ');
    return this.http
      .post(`${environment.apiURL}${path}`, JSON.stringify(body))
      .pipe(
        map((data: any) => {
          this.logger.log(data);
          return data;
        })
      );

    /*return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body), options
    ).pipe(catchError(this.formatErrors));*/
  }
  delete(path: any): Observable<any> {
    return this.http
      .delete(`${environment.apiURL}${path}`)
      .pipe(catchError(this.formatErrors));
  }
}
