import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  name : string='';
  latestTestDate : string='';
  successTestCases : number ;
  failedTestCases : number ;

  constructor() { }
}
