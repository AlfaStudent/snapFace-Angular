import { Component, OnInit, Input, NgModule } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { faceSnapsService } from '../services/face-snap.services';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})

export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap
  constructor(private faceSnapsService: faceSnapsService, 
              private route: ActivatedRoute) {
    
  }
  // title!: string;
  // description!: string;
  // createDate!: Date;
  // snaps!: number;
  // url!: string;
  buttonText!: string;
  // anabled! : boolean;

  ngOnInit() {
    this.buttonText = "Oh Snap!";
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);

  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
    
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
      this.buttonText = 'Oops, Snap!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }
  

}
