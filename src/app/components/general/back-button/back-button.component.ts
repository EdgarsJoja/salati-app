import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {

  /**
   * Constructor
   *
   * @param router
   * @param route
   */
  constructor(private location: Location) { }

  ngOnInit() { }

  /**
   * Navigate back
   */
  public goBack() {
    this.location.back();
  }
}
