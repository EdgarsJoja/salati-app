import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
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
   * @param actionSheet
   */
  constructor(
    private wordBundleManager: WordBundleManagerService,
    private route: ActivatedRoute,
    private router: Router,
    private actionSheet: ActionSheetController
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
   * More actions
   */
  async onMoreButtonClick() {
    const actions = await this.actionSheet.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Edit',
          handler: this.onEditActionClick.bind(this)
        },
        {
          text: 'Delete',
          role: 'desctructive',
          handler: this.onDeleteActionClick.bind(this)
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            actions.dismiss();
          }
        }
      ]
    });

    await actions.present();
  }

  /**
   * Edit action click
   */
  onEditActionClick() {
    this.router.navigate(['/bundles/edit', this.bundle.id]);
  }

  /**
   * Delete action
   */
  onDeleteActionClick() {
    this.wordBundleManager.deleteBundle(this.bundle.id).then(result => {
      this.router.navigate(['/bundles']);
    });
  }
}
