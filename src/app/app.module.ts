import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';

import { CardModule } from './modules/card/card.module';
import { DinamicFormModule } from './modules/dinamic-form/dinamic-form.module';
// import { MessageComponent } from './components/message/message.component';
import { TableModule } from './modules/table/table.module';
import { TableComponent } from './modules/table/components/table/table.component';
import { HarryPotterService } from './services/harry-potter/harry-potter.service';
// import { GenderCellRenderer } from "./gender-cell-renderer.component";
import { HttpModule } from '@angular/http';
import { GenderCellRenderer } from './gender-cell-renderer.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    GenderCellRenderer,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DinamicFormModule,
    CardModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    AgGridModule.withComponents([GenderCellRenderer]),
    CardModule,
    TableModule
  ],
  providers: [HarryPotterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
