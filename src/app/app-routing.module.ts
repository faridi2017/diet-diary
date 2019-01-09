import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingModuleModule } from './landing-module/landing-module.module';


const routes: Routes = [
  {
    path: '',
    loadChildren: './landing-module/landing-module.module#LandingModuleModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
