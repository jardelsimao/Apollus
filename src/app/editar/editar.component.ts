import { Component, Inject } from '@angular/core';
import { Service } from './editar.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  providers: [Service]
})
export class EditarComponent {

  cadastro: any[];
  id: any;
  opcoes: any[];
  opcao: any;

  adicionarForm = this.fb.group({
    id: [''],
    status: [''],
    codigo: [''],
    descricao: ['']
  });

  editarOpcoesForm = this.fb.group({
    id: [''],
    id_cadastro: [''],
    status: [''],
    codigo: [''],
    descricao: ['']
  });

  constructor(
    private service: Service,
     private fb: FormBuilder,
     protected router: Router,
     protected activeroute: ActivatedRoute) {

      this.activeroute
      .queryParams.subscribe(params => {
        this.id = params['id'];
        this.editarOpcoesForm.patchValue({
          id_cadastro: this.id,
        });
        this.getCadastroById(this.id);
        this.getOpcoes(this.id);
      });

  }

  getCadastroById(id) {
    this.service.getCadastroById(id)
    .subscribe(cadastro => {
      this.cadastro = cadastro;
      this.adicionarForm.setValue(cadastro);
    });
  }

  listagem() {
    this.router.navigate(['/cadastros']);
  }

  onSubmit(): void {
    this.service.editarCadastro(this.adicionarForm.value)
    .subscribe(cadastro => {
      this.cadastro = cadastro;
    });
  }

  onSubmitOpcoes(): void {
    this.service.adicionarOpcoes(this.editarOpcoesForm.value)
    .subscribe(opcao => {
      this.opcao = opcao;

      this.getOpcoes(this.id);
      this.editarOpcoesForm.patchValue({
        id_cadastro: this.id,
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
      this.getOpcoes(this.editarOpcoesForm.value['id_cadastro']);
    });

  }

  editarOpcoes(id) {

  }
}
