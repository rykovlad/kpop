import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/services/favorite.service';
import { Task } from 'src/services/all.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
   public favoritTasks: Task[] = [];

  constructor(public favoriteService: FavoriteService, public alertController: AlertController) {}

  ngOnInit(){
    this.favoriteService.favoritTasks$.subscribe(tasks => {
      this.favoritTasks = tasks;
    });
  }
  async showFullInfo(id: string) {
    let chosenVoter;
    this.favoritTasks.find((tasks) => {
        if (tasks.id === id) {
          chosenVoter = tasks;
        }
      });
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Id: ' + chosenVoter.id,
      message: '<p>' + 'UserID: ' + chosenVoter.userId + '</p>' +
      '<p>' + 'Title: ' + chosenVoter.title + '</p>' +
      '<p>' + 'Completed: ' +chosenVoter.completed + '</p>',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
  
  onCheckboxChange(event: any, tasks: Task) {
    if(!event.target.checked) {
      this.favoriteService.addFavoriteTask(tasks);
    }
    else {
      this.favoriteService.removeFavoriteTask(tasks);
    }
  }
  
}
