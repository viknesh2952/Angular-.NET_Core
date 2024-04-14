import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { AuthenticateGuard } from './utilities/guards/authenticate.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'app',loadChildren:()=>import('./core/core.module').then((m)=>m.CoreModule),canActivate:[AuthenticateGuard]},
  {path:'base',loadChildren:()=>import('./concepts/concepts.module').then((m)=>m.ConceptsModule),canActivate:[AuthenticateGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
