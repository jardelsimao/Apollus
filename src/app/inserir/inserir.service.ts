import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class Service {
  private url = 'http://www.syswebr.com/apollus_api/public';

  constructor(private http: HttpClient) {}

  getCadastros(): Observable<any> {
    return this.http.get(`${this.url}/cadastros/listar`);
  }

  getOpcoes(id): Observable<any> {
    return this.http.get(`${this.url}/opcoes_lista/${id}`);
  }

  adicionarCadastro(data: any): Observable<any> {
    const url = `${this.url}/cadastros/adicionar`;
    return this.http.post<any>(url, data);
  }

  adicionarOpcoes(data: any): Observable<any> {
    const url = `${this.url}/opcoes/adicionar`;
    return this.http.post<any>(url, data);
  }

  deletarOpcao(id: any | number): Observable<any> {
    const url = `${this.url}/opcoes/deletar/${id}`;
    return this.http.delete<any>(url);
  }

}
