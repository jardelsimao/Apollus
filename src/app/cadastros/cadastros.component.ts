import { Component, Inject } from '@angular/core';
import { Service } from './cadastros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.css'],
  providers: [Service]
})
export class CadastrosComponent {

  cadastros: any[];

  constructor(private service: Service, protected router: Router) {
    this.getCadastros();
  }

  ver(id) {
    this.router.navigate(['/cadastros/visualizar'], {queryParams: {id: id}});
  }

  getCadastros() {
    this.service.getCadastros()
    .subscribe(cadastros => {
      this.cadastros = cadastros;
    });
  }

  adicionar(): void {
    this.router.navigate(['/cadastros/inserir']);

  }

  deletar(id) {
    this.service.deletarCadastro(id)
    .subscribe(empresa => {
      this.getCadastros();
    });

  }

  editar(id) {
    this.router.navigate(['/cadastros/editar'], {queryParams: {id: id}});
  }

}
