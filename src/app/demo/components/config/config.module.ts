import { NgModel } from "@angular/forms";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from "./config.component";
import { FormsModule } from '@angular/forms';
import { ConfigRoutingModule } from "./config-routing.module";
import { ButtonModule } from "primeng/button";
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';


@NgModule({
    imports: [
       FormsModule,
       ButtonModule,
       ConfigRoutingModule,
       FileUploadModule,
       ToastModule,
       CommonModule
    ],
    declarations: [ConfigComponent]
})


export class ConfigModule {


}