import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [

    TableComponent
  ],
  exports: [TableComponent]
})
export class TableModule { }
