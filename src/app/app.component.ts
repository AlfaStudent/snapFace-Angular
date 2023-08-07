import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  ngOnInit() {
    this.mySnap = {
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      url: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createDate: new Date(),
      snaps: 0,
      location: "Paris"
    };
  }
}
