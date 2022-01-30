import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-aboutMe',
  templateUrl: './aboutMe.component.html',
  styleUrls: ['./aboutMe.component.css']
})
export class AboutMeComponent implements OnInit {

  feedBack : BlobPart ;

  constructor() { }

  ngOnInit() {

  }

  saveFile(text : BlobPart) {
    const blob = 
        new Blob([
                 text], 
                 {type: "text/plain;charset=utf-8"});
    saveAs(blob, "feed-back.txt");
}

}
