import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() { }

  /**
   * Navigate back
   */
  public goBack() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
