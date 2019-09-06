import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimulService {

constructor() { }
/*random utils*/
public randomIntFromInterval(min:number, max:number):number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
public getPercentRange():number{
  return this.randomIntFromInterval(0,100);
}
public getHourRange():number{
  return this.randomIntFromInterval(0,23);
}
public getTimeRange():number{
  return this.randomIntFromInterval(0,59);
}
public fixNumber(pValue:string):string{
  pValue = "00" + pValue;
  return pValue.substr(pValue.length-2,pValue.length-1)
}
public getRandomTime():string{
  let hour:number = this.getHourRange();
  let min:number = this.getTimeRange();
  let sec:number = this.getTimeRange();
  return this.fixNumber(hour.toString()) + ":" + this.fixNumber(min.toString()) + ":" + this.fixNumber(sec.toString());
}
//with this method we can obtain the detail of one particular user (races, challenges, time, etc) and put random values to see the diference on the front end
public simulateValues(pdata:any):any{
  pdata.strength = this.getPercentRange();
  pdata.endurance = this.getPercentRange();
  pdata.dexterity = this.getPercentRange();
  pdata.decisionmaking = this.getPercentRange();
  for (let i:number = 0; i<pdata.races.length; i++){
    let challenges:any = pdata.races[i].challenges;
    for (let x:number = 0; x<challenges.length; x++){
      challenges[x].time = this.getRandomTime();
      challenges[x].p = this.getPercentRange();
      challenges[x].r = this.getPercentRange();
      challenges[x].w = this.getPercentRange();
      challenges[x].f = this.getPercentRange();
    }
    pdata.races[i].challenges = challenges;
  }
  return pdata;
}
}
