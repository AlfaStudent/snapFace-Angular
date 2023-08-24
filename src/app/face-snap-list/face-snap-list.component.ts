import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { faceSnapsService } from '../services/face-snap.services';
@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent {
  faceSnaps!: FaceSnap[];
  constructor(private faceSnapsService: faceSnapsService) {

  }

  ngOnInit() {
    // this.faceSnaps = this.faceSnapsService.faceSnaps;
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
  //   this.faceSnaps = [
  //     {
  //       title: 'Archibald',
  //       description: 'Mon meilleur ami depuis tout petit !',
  //       url: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
  //       createDate: new Date(),
  //       snaps: 150,
  //       location: "Paris"
  //     },
  //     {

  //     title: 'Archibald2',
  //     description: 'Mon meilleur ami depuis tout petit et encore tout petit !',
  //     url: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
  //     createDate: new Date(),
  //     snaps: 1,
  //     location: "Orleans"
  //     },

  //     {

  //     title: 'Archibald3',
  //     description: 'Mon meilleur ami depuis tout petit et encore tout petit !',
  //     url: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
  //     createDate: new Date(),
  //     snaps: 0,
  //     }


  //   ]
  }


}
