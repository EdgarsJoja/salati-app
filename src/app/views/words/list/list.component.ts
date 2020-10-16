import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WordBundle } from 'src/app/models/word-bundle';
import { WordBundleManagerService } from 'src/app/services/storage/word-bundle-manager.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  public bundle: WordBundle = new WordBundle();

  /**
   * Constructor
   *
   * @param wordBundleManager
   * @param route
   * @param router
   */
  constructor(
    private wordBundleManager: WordBundleManagerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.wordBundleManager.getBundle(params.id).then(bundle => {
          this.bundle = bundle;
        });
      }
    });
  }

  /**
   * Edit button click
   *
   * @param bundle
   */
  onEditButtonClick(bundle: WordBundle) {
    this.router.navigate(['/bundles/edit', bundle.id]);
  }
}
