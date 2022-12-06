import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { AutenticacaoGuard } from './services/autenticacao.guard';
import { ClienteObservableComponent } from './pages/observables/cliente-observable/cliente-observable.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent, canActivate: [AutenticacaoGuard]},
  {path:'clientes', component:ClientesComponent, canActivate: [AutenticacaoGuard]},
  {path:'pedidos', component:PedidosComponent, canActivate: [AutenticacaoGuard]},
  {path:'produtos', component:ProdutosComponent, canActivate: [AutenticacaoGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
