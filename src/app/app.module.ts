import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { PreheaderComponent } from './preheader/preheader.component';
import { HeaderButtonComponent } from './header-button/header-button.component';
import { HomeComponent } from './home/home.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PrimeFactorsPipe } from './Pipes/prime-factors.pipe';
import { PrimeFactorDecompositionComponent } from './prime-factor-decomposition/prime-factor-decomposition.component';
import {NgOptimizedImage} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjectListComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    PreheaderComponent,
    HeaderButtonComponent,
    HomeComponent,
    SandboxComponent,
    ContactComponent,
    ContactFormComponent,
    PrimeFactorsPipe,
    PrimeFactorDecompositionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
