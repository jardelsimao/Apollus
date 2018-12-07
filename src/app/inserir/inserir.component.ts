import { Component, Inject } from '@angular/core';
import { Service } from './inserir.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.css'],
  providers: [Service]
})
export class InserirComponent {

  cadastro: any[];
  id_cadastro: any[];
  opcao: any[];
  opcoes: any[];
  hasSaved: any = true;

  adicionarForm = this.fb.group({
    status: [''],
    codigo: [''],
    descricao: ['']
  });

  opcoesForm = this.fb.group({
    id_cadastro: [''],
    status: [''],
    codigo: [''],
    descricao: ['']
  });

  constructor(
    private service: Service,
     private fb: FormBuilder,
     protected router: Router) {
  }

  listagem() {
    this.router.navigate(['/cadastros']);
  }

  onSubmit(): void {
    this.service.adicionarCadastro(this.adicionarForm.value)
    .subscribe(cadastro => {
      this.id_cadastro = cadastro;
      this.hasSaved = false;
      this.opcoesForm.patchValue({
        id_cadastro: this.id_cadastro,
      });
    });
  }

  onSubmitOpcoes(): void {
    this.service.adicionarOpcoes(this.opcoesForm.value)
    .subscribe(opcao => {
      this.opcao = opcao;
      this.getOpcoes(this.opcoesForm.value['id_cadastro']);
      this.opcoesForm.patchValue({
        id_cadastro: this.opcoesForm.value['id_cadastro'],
        status: '',
        codigo: '',
        descricao: ''
      });
    });

  }

  getOpcoes(id) {
    this.service.getOpcoes(id)
    .subscribe(opcoes => {
      this.opcoes = opcoes;
    });
  }

  deletar(id) {
    this.service.deletarOpcao(id)
    .subscribe(empresa => {
      this.getOpcoes(this.opcoesForm.value['id_cadastro']);
    });

  }

  editar() {
    this.router.navigate(['/cadastros/inserir']);

  }

}
