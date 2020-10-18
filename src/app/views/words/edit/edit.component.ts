import { Component, OnInit } from '@angular/core';
import { Word } from 'src/app/models/word';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {

  public word: Word = new Word();

  constructor() { }

  ngOnInit() {}

  /**
   * Save word
   */
  onSaveButtonClick() {

  }
}
