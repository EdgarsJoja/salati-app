import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { WordBundle } from 'src/app/models/word-bundle';
import { UuidService } from '../general/uuid.service';

@Injectable({
  providedIn: 'root'
})
export class WordBundleManagerService {

  protected readonly storageKey = 'word_bundles';

  /**
   * Constructor
   *
   * @param storage
   * @param uuid
   */
  constructor(private storage: Storage, private uuid: UuidService) { }

  /**
   * Save bundle into storage
   *
   * @param bundle
   */
  public async saveBundle(bundle: WordBundle) {
    return this.storage.get(this.storageKey).then(bundles => {
      if (!bundles) {
        bundles = {};
      }

      if (!bundle.id) {
        bundle.id = this.uuid.generate();
      }

      bundles[bundle.id] = bundle;

      return this.storage.set(this.storageKey, bundles);
    });
  }

  /**
   * Get all bundles data
   */
  public async getBundles(): Promise<Array<WordBundle>> {
    return this.storage.get(this.storageKey).then(value => {
      return Object.values(value);
    });
  }

  /**
   * Get bundle by id
   *
   * @param id
   */
  public async getBundle(id: string): Promise<WordBundle> {
    return this.storage.get(this.storageKey).then(value => {
      return value[id] || new WordBundle();
    });
  }

  /**
   * Delete specific bundle
   *
   * @param id
   */
  public async deleteBundle(id: string): Promise<any> {
    return this.storage.get(this.storageKey).then(value => {
      delete value[id];

      return this.storage.set(this.storageKey, value);
    });
  }
}
