import { Component, Inject } from '@angular/core';
import { Service } from './visualizar.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css'],
  providers: [Service]
})

export class VisualizarComponent {

  cadastro: any[];
  id: any;
  opcoes: any[];
  opcao: any;

  verForm = this.fb.group({
    id: [''],
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
        this.verForm.patchValue({
          id_cadastro: this.id,
        });
        this.getCadastroById(this.id);
      });

  }

  getCadastroById(id) {
    this.service.getCadastroFullById(id)
    .subscribe(cadastro => {
      this.cadastro = cadastro;
      this.verForm.setValue(cadastro);
    });
  }

  listagem() {
    this.router.navigate(['/cadastros']);
  }

}
