import { Component, OnInit } from '@angular/core';
import { ViewgalleryService } from '../viewgallery.service';

@Component({
  selector: 'app-addpic',
  templateUrl: './addpic.component.html',
  styleUrls: ['./addpic.component.css']
})
export class AddpicComponent implements OnInit {

  constructor(private api:ViewgalleryService) { 
    api.viewGallery().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }

  ngOnInit(): void {
  }
data:any=[]

}
