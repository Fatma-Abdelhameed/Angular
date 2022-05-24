import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FooterComponent } from './core/footer/footer.component';
import { FeatureModule } from './feature/feature.module';
@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    FeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
