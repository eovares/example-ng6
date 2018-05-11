import {BehaviorSubject} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal (goal) {
    this.goals.next(goal);
  }
}
