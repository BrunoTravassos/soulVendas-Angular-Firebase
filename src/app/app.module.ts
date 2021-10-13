import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { ToastrModule } from 'ngx-toastr';

import { FuncionariosModule } from './funcionarios';
import { ClientesModule } from './cliente';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { TarefasModule } from './tarefas';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutosModule } from './produtos';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TarefasModule, // import do tarefasmodule
    FuncionariosModule, // import do tarefasmodule
    ClientesModule, // import do tarefasmodule
    ProdutosModule, // import do tarefasmodule
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule, // import do routingmodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
