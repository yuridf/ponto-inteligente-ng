import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CadastroComponent} from './cadastro/cadastro.component';
import {ListagemComponent} from './listagem/listagem.component';

const routes: Routes = [
  {path: 'cadastro', component: CadastroComponent},
  {path: '', component: ListagemComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
