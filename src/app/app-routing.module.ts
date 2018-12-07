import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrosComponent} from './cadastros/cadastros.component';
import { InserirComponent } from './inserir/inserir.component';
import { EditarComponent } from './editar/editar.component';
import { VisualizarComponent } from './visualizar/visualizar.component';

const routes: Routes = [
  { path: 'cadastros', component: CadastrosComponent },
  { path: 'cadastros/inserir', component: InserirComponent },
  { path: 'cadastros/editar', component: EditarComponent },
  { path: 'cadastros/visualizar', component: VisualizarComponent },
  { path: '', redirectTo: '/cadastros', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
