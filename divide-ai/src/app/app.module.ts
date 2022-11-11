import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { TelaAboutComponent } from './tela-about/tela-about.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { TelaDespesasComponent } from './tela-despesas/tela-despesas.component';
import { NgxMaskModule } from 'ngx-mask';
import { ResultComponentComponent } from './result-component/result-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicioComponent,
    TelaAboutComponent,
    MenuComponent,
    FooterComponent,
    TelaCadastroComponent,
    TelaDespesasComponent,
    ResultComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
