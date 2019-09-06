import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../utils.service';
import { SimulService } from '../../simul.service';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public dangermsg: string = "";
  public users:any[]; //it can be improved changing type:any to UserModel (making a model class), with a little more time to do the challenge maybe? :)
  public userdata:any; //same as above
  public selectedId:number = null; 
  constructor(private _utilservice: UtilsService, private _simulservice: SimulService) { 
    //GET USERS
    
    this._utilservice.getUsers().subscribe(response => {
      let ret: any;
      ret = response.body;
      if ((ret.code != null) && (ret.msg != null) && (ret.entity != null)) {
        if (ret.code === "1") {
          this.dangermsg = ret.msg;
        } else {
                this.users = ret.entity;
        }
      } else {
        this.dangermsg = "There was an error, please try again later";
      }

    }, reject => {
      this.dangermsg = "There was an error on the request, please try again later";
    }).add(() => { });
    
    //let res = this._utilservice.getUsers();
    //this.users = res.entity;
  }

  ngOnInit() {
  }
  public showDetail(pId:number){
    if (pId == this.selectedId) {
      this.selectedId = null;
      return; 
    }
    //GET DETAIL OF THE USER
    
    this._utilservice.getDetail(pId).subscribe(response => {
      let ret: any;
      ret = response.body;
      if ((ret.code != null) && (ret.msg != null) && (ret.entity != null)) {
        if (ret.code === "1") {
          this.dangermsg = ret.msg;
        } else {    

                this.userdata = this._simulservice.simulateValues(ret.entity);
                this.selectedId = pId;
        }
      } else {
        this.dangermsg = "There was an error showing the detail information, please try again later";
      }

    }, reject => {
      this.dangermsg = "There was an error showing the detail information, please try again later";
    }).add(() => { });
   //let res = this._utilservice.getDetail(pId);
   //this.userdata = this._utilservice.simulateValues(res.entity);
   //this.selectedId = pId;

    
  }

}
