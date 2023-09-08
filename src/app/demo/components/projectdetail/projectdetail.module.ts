import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projectdetailRoutingModule } from './projectdetail-routing.module';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ProjectdetailComponent } from './projectdetail.component';

@NgModule({
    imports: [
        CommonModule,
        projectdetailRoutingModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule
    ],
    declarations: [ProjectdetailComponent]
})
export class projectdetailModule { }
