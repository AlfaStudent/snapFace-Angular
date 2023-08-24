import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class faceSnapsService {
    // faceSnaps!: FaceSnap[]


    faceSnaps: FaceSnap[] = [
        {
          title: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit !',
          url: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createDate: new Date(),
          snaps: 150,
          location: "Paris"
        },
        {
  
        title: 'Archibald2',
        description: 'Mon meilleur ami depuis tout petit et encore tout petit !',
        url: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createDate: new Date(),
        snaps: 1,
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

      getAllFaceSnaps(): FaceSnap[] {
            return this.faceSnaps;
      }

      

}