import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-grid',
  templateUrl: './detail-grid.component.html',
  styleUrls: ['./detail-grid.component.scss']
})
export class DetailGridComponent implements OnInit {
  public id:number = null;
  public show:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.selectedId !== null && this.id !== this.selectedId){
      this.id = this.selectedId;
      this.show = true;
    } else {
      this.show = false;
    }
  }
  public getColor(pValue:number,pColor:string):string{
    return (pValue==0)?'black':pColor;
  }
  public getWidthMiniBar(pValue:number):string{
    return (pValue==0)?'100%':pValue.toString()+'%';
  }

  @Input() userdata:any;
  @Input() selectedId:number=null;
  
  }

