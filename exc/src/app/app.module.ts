import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcelService } from './service/excel.service';
import { PdfService } from './service/pdf.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ExcelService, PdfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
