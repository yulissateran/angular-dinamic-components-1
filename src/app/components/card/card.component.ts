import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  public factory: any;
  public ref: any;
  public component : any;
  public data:BehaviorSubject<any[]>= new BehaviorSubject([
    {
      "name": "Harry Potter",
      "species": "human"
    },
    {
      "name": "Hermione Granger",
      "species": "human"
     }]);

  constructor(private _componentFactoryResolver: ComponentFactoryResolver,
    private _viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }
  sayMessage(){
     this.factory = this._componentFactoryResolver.resolveComponentFactory(MessageComponent);
     this.ref = this._viewContainerRef;
     this.ref.clear();
     this.component =  this.ref.createComponent(this.factory); 
    this.component.changeDetectorRef.detectChanges(); 
    this.component.instance.data = this.data;
    this.component.instance.closed.subscribe(res=> this.destroyComponent())
  }
  destroyComponent(){
    this.component.destroy();
  }
  // component.instance[output].subscribe(

}
