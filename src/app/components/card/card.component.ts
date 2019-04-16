import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private _componentFactoryResolver: ComponentFactoryResolver,
    private _viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }
  sayMessage(){
    const factory = this._componentFactoryResolver.resolveComponentFactory(MessageComponent);
    const ref = this._viewContainerRef.createComponent (factory); 
    ref.changeDetectorRef.detectChanges (); 

  }

}
