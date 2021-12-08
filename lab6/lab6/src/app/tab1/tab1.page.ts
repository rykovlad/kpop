import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/services/all.service';
import { Task } from 'src/services/all.service';
import { AlertController } from '@ionic/angular';
import { FavoriteService } from 'src/services/favorite.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public tasks: Task[] = [];
  public favoritTasks: Task[] = [];

  constructor(private taskService: TaskService, public alertController: AlertController, public favoriteService:
        FavoriteService) {}

  ngOnInit(): void {
      this.taskService.getTasks().subscribe(tasks => {
        this.tasks = tasks.map((item: any) => {
          item.userId = item.userId;
          item.id = item.id;
          item.title = item.title;
          item.completed = item.completed;
          this.tasks.push(item);
          return item;
        });
      });
      this.favoriteService.favoritTasks$.subscribe(tasks => {
      this.favoritTasks = tasks;
    });
  }

  async showFullInfo(id: string) {
    let chosenVoter;
    this.tasks.find((task) => {
        if (task.id === id) {
          chosenVoter = task;
        }
      });
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Id: ' + chosenVoter.id,
      message: '<p>' + 'UserID: ' + chosenVoter.userId + '</p>' +
      '<p>' + 'Title: ' + chosenVoter.title + '</p>' +
      '<p>' + 'Completed: ' + chosenVoter.completed + '</p>',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  onCheckboxChange(event: any, task: Task) {
    if (!event.target.checked) {
      this.favoriteService.addFavoriteTask(task);
    }
    else {
      this.favoriteService.removeFavoriteTask(task);
    }
  }

  favorite(task) {
    //this.favoriteService.isFavorite(task);
    return this.favoriteService.isFavorite(task);
  }
  
  addToFavorite(task){
    this.favoriteService.addFavoriteTask(task);
  }

  removeFromFavorite(task){
    this.favoriteService.removeFavoriteTask(task);
  }
}
