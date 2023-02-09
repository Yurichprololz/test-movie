import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DisableButtonService {

  subject: BehaviorSubject<boolean>;

  constructor() {
    this.subject = new BehaviorSubject<boolean>(false);
  }

  isDisable(bool: boolean){
    this.subject.next(bool);
  }
}
