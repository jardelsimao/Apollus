import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { InserirComponent } from './inserir/inserir.component';
import { EditarComponent } from './editar/editar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';
import {
   MatToolbarModule,
   MatCardModule,
   MatButtonModule,
   MatDialogModule,
  } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CadastrosComponent,
    InserirComponent,
    EditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DxDataGridModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    DxButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
