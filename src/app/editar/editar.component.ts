import { Component, Inject } from '@angular/core';
import { Service } from './editar.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

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
     public dialog: MatDialog,
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

  editarOpcoes(data) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: data,
      panelClass: 'apollus-no-padding-dialog',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getOpcoes(data['cadastro_id']);
      console.log(data['cadastro_id']);
    });
  }
}

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.html',
  providers: [Service],
})

export class ModalComponent {

  editarModalForm = this.fb.group({
    id: [''],
    cadastro_id: [''],
    status: [''],
    codigo: [''],
    descricao: ['']
  });

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private fb: FormBuilder,
    private service: Service,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.editarModalForm.setValue(data);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.service.editarOpcoes(this.editarModalForm.value)
    .subscribe(dt => {
      this.dialogRef.close();
    });
  }


}
