import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { CortesComponent } from './cortes/cortes.component';
import { PreciosComponent } from './precios/precios.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CreateCorteComponent } from './create-corte/create-corte.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ServiceService } from '../shared/Service/service.service';





@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    CortesComponent,
    PreciosComponent,
    CreateCorteComponent,

    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
  ],
  exports:[
    HeaderComponent,
    HomeComponent
  ],
  providers: [ServiceService]
})
export class ComponentsModule { }
