import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  /**
   * Constructor
   *
   * @param router
   * @param route
   */
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() { }

  /**
   * On FAB button click
   */
  onFabClick() {
    this.router.navigate(["edit"], { relativeTo: this.route });
  }
}
