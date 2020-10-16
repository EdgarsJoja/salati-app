import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { WordBundle } from 'src/app/models/word-bundle';
import { WordBundleManagerService } from 'src/app/services/storage/word-bundle-manager.service';

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {

  public bundles: Array<WordBundle>;

  /**
   * Constructor
   *
   * @param router
   * @param route
   * @param wordBundlesManager
   */
  constructor(private router: Router, private route: ActivatedRoute, private wordBundlesManager: WordBundleManagerService) { }

  ngOnInit() {
    this.loadBundles();
  }

  ionViewWillEnter() {
    this.loadBundles();
  }

  /**
   * On FAB button click
   */
  onFabClick() {
    this.router.navigate(["edit"], { relativeTo: this.route });
  }

  /**
   * On list item click
   *
   * @param bundle
   */
  onBundleClick(bundle: WordBundle) {
    this.router.navigate(["edit", bundle.id], { relativeTo: this.route });
  }

  /**
   * Load bundles list data
   */
  protected loadBundles() {
    this.wordBundlesManager.getBundles().then(value => {
      this.bundles = value;
    });
  }
}
