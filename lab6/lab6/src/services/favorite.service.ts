import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Task } from './all.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  public favoritTasks$ = new BehaviorSubject<Task[]>([]);
  public favoritTasks: Task[] = [];
  private storage: Storage | null = null;

  constructor(storage: Storage) {
      this.initStorage(storage);
  }
  public isFavorite(taskToFind: Task) {
    for (const post of this.favoritTasks) {
      
      if (post.id === taskToFind.id) {
        return true;
      }
    }
    return false;
  }

  public async addFavoriteTask(task: Task) {
    if (!this.isFavorite(task)) {
      this.favoritTasks.push(task);
      await this.storage?.set('favorites', this.favoritTasks);
      this.favoritTasks$.next(this.favoritTasks);
    }
  }

  public async removeFavoriteTask(taskToRemove: Task) {
    this.favoritTasks = this.favoritTasks.filter(task => task.id !== taskToRemove.id);
    await this.storage?.set('favorites', this.favoritTasks);
    this.favoritTasks$.next(this.favoritTasks);
  }

  private async initStorage(storage: Storage) {
    this.storage = await storage.create();
    const favorites = await this.storage.get('favorites');
    if (favorites) {
      this.favoritTasks = favorites as Task[];
      this.favoritTasks$.next(this.favoritTasks);
    }
  }
}
