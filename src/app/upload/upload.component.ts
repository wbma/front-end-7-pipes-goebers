import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  file: File;
  title: string;
  description: string;

  upload() {
    console.log(this.file);
    console.log(this.title);
    console.log(this.description);
  }

  kys(paska) {
    console.log(paska);
  }

}
