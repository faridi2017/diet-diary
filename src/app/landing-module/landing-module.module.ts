import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingModuleRoutingModule } from './landing-module-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  imports: [
    CommonModule,
    LandingModuleRoutingModule
  ],
  declarations: [HomePageComponent, FooterComponent, ServicesComponent]
})
export class LandingModuleModule { }
