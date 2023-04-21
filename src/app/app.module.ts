import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from "./app-routing.module";
import {VentasModule} from "./ventas/ventas.module";

// Cambiar el locale de la app
import localeEsMx from '@angular/common/locales/es-MX';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

registerLocaleData(localeEsMx);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    VentasModule
  ],
  providers: [
    {
    provide: LOCALE_ID,
    useValue: 'es-MX',
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
