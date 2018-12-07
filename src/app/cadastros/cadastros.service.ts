import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class Service {
  private url = 'http://localhost/apollus/public';

  constructor(private http: HttpClient) {}

  getCadastros(): Observable<any> {
    return this.http.get(`${this.url}/cadastros/listar`);
  }

  adicionarCadastro(data: any): Observable<any> {
    const url = `${this.url}/cadastros/adicionar`;
    return this.http.post<any>(url, data);
  }

  deletarCadastro(id: any | number): Observable<any> {
    const url = `${this.url}/cadastros/deletar/${id}`;
    return this.http.delete<any>(url);
  }

}
