import { Component } from '@angular/core';
import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
    selector: 'app-gender-renderer',
    template: `
            <span>
            <a [routerLink]="[link]">link</a>
                <img class="img" [src]="imageSource" >&times; {{value}}    
            </span>
            
    `,
    styleUrls: ['./app.component.css'],
})
export class GenderCellRenderer implements ICellRendererAngularComp {
    private imageSource: string;
    private value: any;
    public params: any;
    public link :any;
    agInit(params): void {
        const image = params.value === 'Male' ? 'male.png' : 'female.png';
        this.link='./home'
        this.imageSource = params.value 
        this.value = params.value;
    }
    public invokeParentMethod() {
        this.params.context.componentParent.methodFromParent(`Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`)
    }

    refresh(): boolean {
        return false;
    }
}