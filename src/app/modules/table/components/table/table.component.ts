import { Component, OnInit, ViewChild } from '@angular/core';

import { AgGridNg2 } from 'ag-grid-angular';

// import { HarryPotterService } from './services/harry-potter/harry-potter.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operator/map';
import { HarryPotterService } from 'app/services/harry-potter/harry-potter.service';
import { GenderCellRenderer } from 'app/gender-cell-renderer.component';
// import { GenderCellRenderer } from './gender-cell-renderer.component';
@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [HarryPotterService]
})
export class TableComponent implements OnInit {
    @ViewChild('agGrid') agGrid: AgGridNg2;
    public rowData: Observable<any[]>;
  public frameworkComponents:any;
  public context: any;
  public gridApi: any;
    constructor(public _HarryPotterService: HarryPotterService){ }
    
    ngOnInit(){
      this.frameworkComponents = {genderCellRenderer:GenderCellRenderer}
      console.log("La resolución de tu pantalla es: " + screen.width + " x " + screen.height) 
      // this.rowData =  this._HarryPotterService.getHarryPotterData();
      this.context = { componentParent: this };
      this.rowData = of([{
        "name": "Horace Slughorn",
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "ancestry": "pure-blood",
        "eyeColour": "green",
        "hairColour": "blonde",
        "wand": {
        "wood": "cedar",
        "core": "dragon heartstring",
        "length": 10.25
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "Jim Broadbent",
        "alive": true,
        "image": "http://hp-api.herokuapp.com/images/slughorn.JPG"
        },
        {
          "name": "Horac Slughorn",
          "species": "human",
          "gender": "male",
          "house": "Slytherin",
          "dateOfBirth": "",
          "yearOfBirth": "",
          "ancestry": "pure-blood",
          "eyeColour": "green",
          "hairColour": "blonde",
          "wand": {
          "wood": "cedar",
          "core": "dragon heartstring",
          "length": 10.25
          },
          "patronus": "",
          "hogwartsStudent": false,
          "hogwartsStaff": true,
          "actor": "Jim Broadbent",
          "alive": true,
          "image": "http://hp-api.herokuapp.com/images/slughorn.JPG"
          }])
  
    }
   
    title = 'app';
    columnDefs = [
      {headerName: 'Nombre', field: 'image', sortable: true, filter: true, checkboxSelection: true ,
       editable: true,   cellRenderer: "genderCellRenderer",   resizable: true
      ,headerCheckboxSelection: true
    },
      {headerName: 'Rol', field: 'patronus' , sortable: true, filter: true,  resizable: true},
      {headerName: 'actor', field: 'actor', sortable: true, filter: true,  resizable: true}
  ];
  addRow(){
    this.rowData  = this.rowData.map(num => num.concat(  [{
      "name": "Emma Wattson",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "",
      "yearOfBirth": "",
      "ancestry": "pure-blood",
      "eyeColour": "green",
      "hairColour": "blonde",
      "wand": {
      "wood": "cedar",
      "core": "dragon heartstring",
      "length": 10.25
      },
      "patronus": "",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "Jim Broadbent",
      "alive": true,
      "image": "http://hp-api.herokuapp.com/images/slughorn.JPG"
      }]));
    console.log(this.rowData)
  }
  deleteRow(){
      this.rowData  = this.rowData.map(num => num.filter(elem =>elem.name !== 'Horace Slughorn' ));
      console.log(this.rowData)
    }
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.name + ' ' + node.actor + node.gender).join(', ');
    // console.log(`Selected nodes: ${selectedDataStringPresentation}`);
    console.log(`Selected nodes: ${selectedNodes.length}`);

  }
  onPageSizeChanged(newPageSize) {
    console.log(newPageSize)
    // var value = document.getElementById("page-size").value;
    this.gridApi.paginationSetPageSize(Number(newPageSize));
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.paginationSetPageSize(Number(10));
  }
  }

