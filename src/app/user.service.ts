import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  firstName: string = '';
  lastName: string = '';
  imageUrl: string ='';

  setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  getFirstName(): string {
    return this.firstName;
  }

  
  setImageUrl(imageUrl: string) {
    this.imageUrl = imageUrl;
  }

  getImageUrl(): string {
    return this.imageUrl;
  }

  
  setLastName(lastName: string) {
    this.lastName = lastName;
  }

  getLastName(): string {
    return this.lastName;
  }
}
