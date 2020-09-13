@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy, DoCheck {
  public isAuthenticated = false;

  ngDoCheck(): void {
    console.log('ngDoCheck()');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy()');
  }

  constructor() {
    console.log('constructor()');

  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}

import {Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
