import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpClientService<T> {
  constructor(private httpClient: HttpClient) { }

  //returns get from api in env
  get(route: string): Observable<HttpResponse<T[]>> {
    const url = "https://localhost:7166/api/" + route;
    return this.httpClient.get<any>(url);
  }
  
  getSelectOptions(programa: string, selectDb: string) {
    return this.httpClient.get<any>(`https://localhost:7054/api/${programa}/selectOptions?dbname=${selectDb}`);
  }

  getdadosMonitoramento(programa: string, query: string) {
    const body = { query: query };
    
    return this.httpClient.get<any>(`https://localhost:7054/api/${programa}/dadosMonitoramento?query=${query}`, );
  }

  getWithId(route: string, id: number): Observable<T> {
    const url = "https://localhost:7166/api/" + route + "/" + id;
    return this.httpClient.get<T>(url);
  }

  post(route: string, body: T): Observable<T> {
    const url = "https://localhost:7166/api/" + route;
    return this.httpClient.post<T>(url, body)
  }

  put(route: string, id: number, body: T): Observable<T> {
    const url = "https://localhost:7166/api/" + route + "/" + id;
    return this.httpClient.put<T>(url, body)
  }

  delete(route: string, id: number): Observable<HttpStatusCode> {
    const url = "https://localhost:7166/api/" + route + "/" + id;
    return this.httpClient.delete<HttpStatusCode>(url)
  }

  getSempre(email: string): Observable<HttpEvent<T>> {
    const url = "https://localhost:7054/api/Sempre?email=" + email;
    return this.httpClient.get<any>(url);
  }
}