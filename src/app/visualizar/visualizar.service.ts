import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class Service {
  private url = 'http://localhost/apollus/public';

  constructor(private http: HttpClient) {}

  getCadastroFullById(id): Observable<any> {
    return this.http.get(`${this.url}/cadastro/visualizar/${id}`);
  }

}
