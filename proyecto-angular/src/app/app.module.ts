import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { Cmp01DataBindingComponent } from './cmp01-data-binding/cmp01-data-binding.component';
import { Ej01DataBindingComponent } from './ejercicios/ej01-data-binding/ej01-data-binding.component';
import { FormsModule } from '@angular/forms';
import { Cmp02InputOutputComponent } from './cmp02-input-output/cmp02-input-output.component';
import { SugusComponent } from './cmp02-input-output/sugus/sugus.component';
import { ProductoComponent } from './cmp02-input-output/producto/producto.component';
import { Cmp03ReferenciasComponent } from './cmp03-referencias/cmp03-referencias.component';
import { Cmp04DirectivasComponent } from './cmp04-directivas/cmp04-directivas.component';


@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    Cmp01DataBindingComponent,
    Ej01DataBindingComponent,
    Cmp02InputOutputComponent,
    SugusComponent,
    ProductoComponent,
    Cmp03ReferenciasComponent,
    Cmp04DirectivasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
