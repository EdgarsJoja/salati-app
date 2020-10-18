import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Word } from 'src/app/models/word';
import { WordBundle } from 'src/app/models/word-bundle';
import { WordBundleManagerService } from 'src/app/services/storage/word-bundle-manager.service';
import { WordManagerService } from 'src/app/services/storage/word-manager.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  public bundle: WordBundle = new WordBundle();

  public words: Array<Word> = [];

  /**
   * Constructor
   *
   * @param wordBundleManager
   * @param route
   * @param router
   * @param actionSheet
   * @param wordManager
   */
  constructor(
    private wordBundleManager: WordBundleManagerService,
    private route: ActivatedRoute,
    private router: Router,
    private actionSheet: ActionSheetController,
    private wordManager: WordManagerService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.bundleId) {
        this.wordBundleManager.getBundle(params.bundleId).then(bundle => {
          this.bundle = bundle;

          this.loadWords();
        });
      }
    });
  }

  ionViewWillEnter() {
    this.loadWords();
  }

  /**
   * Load bundle words
   */
  protected loadWords() {
    this.wordManager.getBundleWords(this.bundle.id).then(words => {
      this.words = words.sort((a, b) => {
        // @todo: Create setting for enabling/disabling sorting
        return b.text < a.text ? 1 : -1;
      });
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

  /**
   * On fab button click
   */
  onFabClick() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  /**
   * Delete word
   *
   * @param deleteId
   */
  onWordDeleteClick(deleteId: string) {
    this.wordManager.deleteWord(deleteId).then(result => {
      this.words = this.words.filter((word: Word): word is Word => {
        return word.id !== deleteId;
      });
    });
  }
}
