import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { Cmp01DataBindingComponent } from './cmp01-data-binding/cmp01-data-binding.component';
import { Ej01DataBindingComponent } from './ejercicios/ej01-data-binding/ej01-data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Cmp02InputOutputComponent } from './cmp02-input-output/cmp02-input-output.component';
import { SugusComponent } from './cmp02-input-output/sugus/sugus.component';
import { ProductoComponent } from './cmp02-input-output/producto/producto.component';
import { Cmp03ReferenciasComponent } from './cmp03-referencias/cmp03-referencias.component';
import { Cmp04DirectivasComponent } from './cmp04-directivas/cmp04-directivas.component';
import { Cmp05PipesComponent } from './cmp05-pipes/cmp05-pipes.component';
import { DescuentoPipe } from './cmp05-pipes/pipes/descuento.pipe';
import { Cmp06FormulariosComponent } from './cmp06-formularios/cmp06-formularios.component';
import { FormReactivoComponent } from './cmp06-formularios/form-reactivo/form-reactivo.component';
import { FormPlantillaComponent } from './cmp06-formularios/form-plantilla/form-plantilla.component';


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
    Cmp04DirectivasComponent,
    Cmp05PipesComponent,
    DescuentoPipe,
    Cmp06FormulariosComponent,
    FormReactivoComponent,
    FormPlantillaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
