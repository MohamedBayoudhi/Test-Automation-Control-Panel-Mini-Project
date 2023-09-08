import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    get firstName(): string {
        return this.us.firstName; // Access user data from the service
      }
    
      get lastName(): string {
        return this.us.lastName;
      }
    
      get imageUrl(): string {
        return this.us.imageUrl;
      }

    items!: MenuItem[];

    logout() {
        // Implement logout logic here (e.g., clear user session data)
        // Then navigate to the login page
        this.router.navigate(['/auth/login']);
      }
 
    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService , private router: Router, private us: UserService) { }
}
