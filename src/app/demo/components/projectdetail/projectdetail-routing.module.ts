import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectdetailComponent } from './projectdetail.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ProjectdetailComponent }
    ])],
    exports: [RouterModule]
})
export class projectdetailRoutingModule { }
