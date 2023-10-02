
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LabseqService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getCalculationResult(value: any): Observable<any> {
    const url = `${this.baseUrl}/${value}`
    return this.http.get<any>(url)
  }
}
