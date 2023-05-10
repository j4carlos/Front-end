import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
URL = 'http://localhost:8080/habilidades/'
  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.URL + 'lista');
  }

  public detail(id: number):Observable<Skills>{
    return this.httpClient.get<Skills>(this.URL + `detail/${id}`)
  }

  public save(habilidades: Skills): Observable<any>{
    return this.httpClient.post<any>(this.URL + `create`, habilidades)
  }

  public update(id: number, habilidades: Skills): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, habilidades)
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`)
  }
}
