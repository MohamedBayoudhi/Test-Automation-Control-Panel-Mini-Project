import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service'; 
import { ChangeDetectorRef } from '@angular/core';
import { MessageService } from 'primeng/api';

interface UploadEvent {

  originalEvent: Event;

  files: File[];

}



@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  providers: [MessageService]

})
export class ConfigComponent {
  newFirstName: string = '';
  newLastName: string = '';
  imageUrl: string = '';
  uploadedFiles: any[] = []

  constructor(private us: UserService, private cdr: ChangeDetectorRef , private ms: MessageService) {}

  ngOnInit() {
    // Fetch the user's first name and last name from the UserService
    this.newFirstName = this.us.getFirstName();
    this.newLastName = this.us.getLastName();
    this.imageUrl = this.us.getImageUrl();
    
  }

  onUpload(event:UploadEvent) {

    for(let file of event.files) {

        this.uploadedFiles.push(file);
        if (file) {
          const reader = new FileReader();
    
          reader.readAsDataURL(file);
    
          reader.onload = (e) => {
            // Set the image URL in the component and in the service
            this.imageUrl = reader.result as string;
            this.us.setImageUrl(this.imageUrl);
          };
        }


    }



    this.ms.add({severity: 'info', summary: 'File Uploaded', detail: ''});

  } 

  // onUpload(event: any) {
  //   const file = event.target.file[0];

  //   if (file) {
  //     const reader = new FileReader();

  //     reader.readAsDataURL(file);

  //     reader.onload = (e) => {
  //       // Set the image URL in the component and in the service
  //       this.imageUrl = reader.result as string;
  //       this.us.setImageUrl(this.imageUrl);
  //     };
  //   }
  // }
  

  updateName() {
    this.us.setFirstName(this.newFirstName);
    this.us.setLastName(this.newLastName);
  }
}
