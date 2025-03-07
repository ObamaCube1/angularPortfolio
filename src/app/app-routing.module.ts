import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SandboxComponent} from './sandbox/sandbox.component';
import {ContactComponent} from './contact/contact.component';
import {ProjectDetailsComponent} from './project-details/project-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'sandbox', component: SandboxComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'home/:id', component: ProjectDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
