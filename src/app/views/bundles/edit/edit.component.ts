import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { WordBundle } from 'src/app/models/word-bundle';
import { WordBundleManagerService } from 'src/app/services/storage/word-bundle-manager.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {

  public bundle: WordBundle = new WordBundle();

  /**
   * Constructor
   *
   * @param wordBundleManager
   * @param route
   * @param navController
   */
  constructor(
    private wordBundleManager: WordBundleManagerService,
    private route: ActivatedRoute,
    private navController: NavController
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
   * On save button press
   */
  onSaveButtonClick() {
    this.wordBundleManager.saveBundle(this.bundle).then(result => {
      this.navController.back();
    });
  }
}
