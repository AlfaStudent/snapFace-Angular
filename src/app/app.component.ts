import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  // mySnap!: FaceSnap;
  // autherSnap!: FaceSnap;
  // anAutherSnap!: FaceSnap;
  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        url: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createDate: new Date(),
        snaps: 0,
        location: "Paris"
      },
      {

      title: 'Archibald2',
      description: 'Mon meilleur ami depuis tout petit et encore tout petit !',
      url: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createDate: new Date(),
      snaps: 0,
      location: "Orleans"
      },

      {

      title: 'Archibald3',
      description: 'Mon meilleur ami depuis tout petit et encore tout petit !',
      url: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createDate: new Date(),
      snaps: 0,
      }


    ]
    // this.mySnap = {
    //   title: 'Archibald',
    //   description: 'Mon meilleur ami depuis tout petit !',
    //   url: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    //   createDate: new Date(),
    //   snaps: 0,
    //   location: "Paris"
    // };
    // this.autherSnap = {
    //   title: 'Archibald2',
    //   description: 'Mon meilleur ami depuis tout petit et encore tout petit !',
    //   url: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    //   createDate: new Date(),
    //   snaps: 0,
    //   location: "Orleans"
    // };
    // this.anAutherSnap = {
    //   title: 'Archibald3',
    //   description: 'Mon meilleur ami depuis tout petit et encore tout petit !',
    //   url: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    //   createDate: new Date(),
    //   snaps: 0,
      
    // };

  }
}
