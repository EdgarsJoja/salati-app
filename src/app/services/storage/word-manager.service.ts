import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Word } from 'src/app/models/word';
import { UuidService } from '../general/uuid.service';

@Injectable({
  providedIn: 'root'
})
export class WordManagerService {

  protected readonly storageKey = 'words';

  /**
   * Constructor
   *
   * @param storage
   * @param uuid
   */
  constructor(private storage: Storage, private uuid: UuidService) { }

    /**
   * Save word into storage
   *
   * @param bundle
   */
  public async saveWord(word: Word) {
    return this.storage.get(this.storageKey).then(words => {
      if (!words) {
        words = {};
      }

      if (!word.id) {
        word.id = this.uuid.generate();
      }

      if (!word.bundleId) {
        throw new Error('Word does not have "bundleId" property specified');
      }

      words[word.id] = word;

      return this.storage.set(this.storageKey, words);
    });
  }

    /**
   * Get all words for specific bundle
   */
  public async getBundleWords(bundleId: string): Promise<Array<Word>> {
    return this.storage.get(this.storageKey).then(value => {
      return Object.values(value).filter((word: Word): word is Word => {
        return word.bundleId === bundleId;
      });
    });
  }

  /**
   * Delete specific bundle words
   *
   * @param bundleId
   */
  public async deleteBundleWords(bundleId: string): Promise<any> {
    return this.storage.get(this.storageKey).then(words => {
      words = Object.values(words).reduce((result, word: Word) => {
        if (word.bundleId === bundleId) {
          return result;
        }

        result[word.id] = word;

        return result;
      }, {});

      return this.storage.set(this.storageKey, words);
    });
  }

    /**
   * Delete specific word
   *
   * @param id
   */
  public async deleteWord(id: string): Promise<any> {
    return this.storage.get(this.storageKey).then(value => {
      delete value[id];

      return this.storage.set(this.storageKey, value);
    });
  }
}
