import { Component } from '@angular/core';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  shortLink : string = "";
  loading : boolean = false ;
  file! : File;


  constructor (private fileService: FileUploadService){

  }

  onChange(event : any) {
    this.file = event.target.file[0];

  }

  onUpload(){
    this.loading = !this.loading;
    console.log(this.file)
    this.fileService.upload(this.file).subscribe((event : any ) =>{
        if (typeof (event) === 'object'){
          this.shortLink = event.link;
          this.loading = false;
        }
    });
  }

}
