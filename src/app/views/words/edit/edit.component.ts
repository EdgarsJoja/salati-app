import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Word } from 'src/app/models/word';
import { WordManagerService } from 'src/app/services/storage/word-manager.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {

  public word: Word = new Word();

  /**
   * Constructor
   *
   * @param wordManager
   * @param route
   * @param navController
   */
  constructor(
    private wordManager: WordManagerService,
    private route: ActivatedRoute,
    private navController: NavController
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.bundleId) {
        this.word.bundleId = params.bundleId;
      }
    });
  }

  /**
   * Save word
   */
  onSaveButtonClick() {
    this.wordManager.saveWord(this.word).then(result => {
      this.navController.back();
    });
  }
}
