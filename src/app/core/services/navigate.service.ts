import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  constructor(private router :Router) { }

  toDetailedPage(id: string){
    this.router.navigate(['movie', id]);
  }

  goHome(){
    this.router.navigate(['']);
  }
}
