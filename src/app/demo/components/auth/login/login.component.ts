import { Component,ChangeDetectorRef } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {
    
    email: string = ''; 
    password: string = '';
    lastName: string = '';
    firstName: string = '';
    imageUrl: string ='';

    users = [
        { email: 'bayoudhimed@gmail.com', password: '1234', firstName: 'Mohamed', lastName: 'Bayoudhi' , imageUrl:'assets/demo/images/login/Mpic.png'},
        { email: 'user2@example.com', password: 'password2', firstName: 'travis', lastName: 'Scott', imageUrl :'' },
        // we can add more users 
      ];
    
    valCheck: string[] = ['remember'];
    
    

    constructor(public layoutService: LayoutService, private cdr: ChangeDetectorRef ,private us: UserService ,private router: Router) { }
    login() {
        const user = this.users.find(u => u.email === this.email && u.password === this.password);
    
        if (user) {
          // Successful login
          console.log('Login successful');
          this.us.firstName = user.firstName;
          this.us.lastName = user.lastName;
          this.us.imageUrl = user.imageUrl; 

          localStorage.setItem('user', JSON.stringify(user));
    
          console.log(this.us.firstName, this.us.lastName);
    
          this.cdr.detectChanges();
          this.router.navigate(['/']); // Navigate to another component
        } else {
          // Failed login
          console.error('Login failed. Invalid email or password.');
        }
      }
}
