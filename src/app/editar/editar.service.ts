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

  getCadastroById(id): Observable<any> {
    return this.http.get(`${this.url}/cadastro/${id}`);
  }

  editarCadastro(data: any): Observable<any> {
    const id = data['id'];
    const url = `${this.url}/cadastros/editar/${id}`;
    return this.http.put<any>(url, data);
  }

  editarOpcoes(data: any): Observable<any> {
    const id = data['id'];
    const url = `${this.url}/opcoes/editar/${id}`;
    return this.http.put<any>(url, data);
  }

  getOpcoes(id): Observable<any> {
    return this.http.get(`${this.url}/opcoes_lista/${id}`);
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
