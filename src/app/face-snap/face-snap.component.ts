import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createDate!: Date;
  snaps!: number;
  url!: string;
  buttonText!: string;
  anabled! : boolean;

  ngOnInit() {
    this.title = "archibalde";
    this.description = "mon meilleur ami depuis 3 ans";
    this.createDate = new Date();
    this.snaps = 6;
    this.url = "https://eu.366concept.com/cdn/shop/products/36JACSV5202NN_448a988e-1c39-49bf-98cd-2a49858feb1c_900x.jpg?v=1667648539"
    this.buttonText = "oh Snap";
    this.anabled = true;

  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.snaps++;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }

}
