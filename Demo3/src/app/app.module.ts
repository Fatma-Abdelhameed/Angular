import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StringConvertPipe } from './string-convert.pipe';
import { FilterPipe } from './filter.pipe';
import { RatingComponent } from './shared/rating/rating.component';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import { ProductsComponent } from './products/products.component'; 
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
@NgModule({
  declarations: [
    AppComponent,
    StringConvertPipe,
    FilterPipe,
    RatingComponent,
    ProductsComponent
    ],
  imports: [
    BrowserModule, FormsModule, AccordionModule,ButtonModule,PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
