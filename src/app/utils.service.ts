import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UtilsService {
  constructor(private http: HttpClient) { }
 //ajax simulation for get the users
 public getUsers() {
  return this.http.get('assets/json/users.json', { observe: 'response' }).pipe();
 }
 //ajax simulation to get the user detail
 public getDetail(pId:number) {
  return this.http.get('assets/json/detail.json', { observe: 'response' }).pipe();
 }
  /*
  //ajax simulation for get the users
  public getUsers():any {
    let user:any;
    user = {
      "code":"0",
      "msg":"",
      "entity":[
          {"id":1, "place":"1", "name":"Federico Ilprincipe" ,"avatar":"1.jpg", "bib":"1085", "age":"27", "gender":"M", "time":"17:42", "score":"41"},
          {"id":2, "place":"2", "name":"Patrick Jhonson"     ,"avatar":"2.jpg", "bib":"1085", "age":"25", "gender":"M", "time":"17:45", "score":"51"},
          {"id":3, "place":"3", "name":"Michael Monks"       ,"avatar":"3.jpg", "bib":"1085", "age":"40", "gender":"M", "time":"17:46", "score":"61"},
          {"id":4, "place":"3", "name":"Hakim Callender"     ,"avatar":"4.jpg", "bib":"1085", "age":"30", "gender":"M", "time":"17:47", "score":"71"},
          {"id":5, "place":"5", "name":"Everton Lawrence"    ,"avatar":"5.jpg", "bib":"1085", "age":"37", "gender":"M", "time":"17:48", "score":"81"},
          {"id":6, "place":"6", "name":"Patricia Sothers"    ,"avatar":"6.jpg", "bib":"1085", "age":"24", "gender":"F", "time":"17:49", "score":"91"},
          {"id":7, "place":"7", "name":"Pat Calhoun"         ,"avatar":"7.jpg", "bib":"1085", "age":"39", "gender":"M", "time":"17:50", "score":"101"}
      ]
    };
    return user;
  }
  //ajax simulation to get the user detail
  public getDetail(pId:number):any {
    let detail:any;
    detail = {
        "code":"0",
        "msg":"",
        "entity":
            {
                "userid":2, "strength":"55", "endurance":"30","dexterity":"60","decisionmaking":"40",
                "races":[
                    {
                        "title":"Post Apocalyptic Highway",
                        "challenges":[
                            {"order":"1", "title":"Hill Climb"          , "time":"00:17:35", "value":"5", "p":100 ,"r":80, "w":90,"f":40},
                            {"order":"2", "title":"Run for the Hills"   , "time":"00:17:35", "value":"6", "p":50  ,"r":10, "w":0, "f":0},
                            {"order":"3", "title":"Coded Doors"         , "time":"00:17:35", "value":"3", "p":50  ,"r":0,  "w":90,"f":0 },
                            {"order":"4", "title":"Spear Throw"         , "time":"00:05:35", "value":"8", "p":0   ,"r":35, "w":0, "f":70},
                            {"order":"5", "title":"Sand Bagging"        , "time":"00:17:35", "value":"2", "p":100 ,"r":0,  "w":90,"f":40}
                        ]
                    }
                    ,
                    {
                        "title":"Costa Rican Caves",
                        "challenges":[
                            {"order":"6",  "title":"Crevasse Crossing"      , "time":"00:17:35", "value":"5", "p":100 ,"r":80, "w":90,"f":40},
                            {"order":"7",  "title":"The canopy"             , "time":"00:17:35", "value":"6", "p":50  ,"r":10, "w":0, "f":0},
                            {"order":"8",  "title":"Dirty Armor"            , "time":"00:17:35", "value":"3", "p":50  ,"r":0,  "w":90,"f":0 },
                            {"order":"9",  "title":"Navigational Challenge" , "time":"00:05:35", "value":"8", "p":0   ,"r":35, "w":0, "f":70},
                            {"order":"10", "title":"Dead Weight"            , "time":"00:17:35", "value":"2", "p":100 ,"r":0,  "w":90,"f":40}
                        ]
                    }
                ]
            }
    };
    return detail;
  }
  */
}
