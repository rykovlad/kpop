import { Component, OnInit, Inject } from '@angular/core';
import { AppService, Result } from './app.service';
//import {MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  title = 'lab 5';
  users: Result[] = [];
  displayedColumns: string[] = ['title', 'location_type', 'woeid', 'latt_long']
  constructor(private appService: AppService, private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log("its working... mb")

    this.appService.getUsers().subscribe(x => {
      console.dir(x)
      this.users = x.map(el => el[0])
    })
    console.log(this.users)

  }

  onRowClicked(row: Result) {
    this.appService.getWeather(row.woeid).subscribe((data) => {
      console.dir(row);
      this.dialog.open(DialogComp, {data});
    }
    )
  }
}

@Component({
  selector: 'dialogComp',
  templateUrl: './app.dialog.html'
})
export class DialogComp implements OnInit{
  
  res: Result
  
  ngOnInit(): void {
    this.appService.getWeather(this.data.woeid).subscribe(x => this.res = x)
  }
  
  constructor(public dialogRef: MatDialogRef<DialogComp>,
    @Inject(MAT_DIALOG_DATA) public data: Result, private appService: AppService ) { }
}