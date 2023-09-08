import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppLayoutComponent } from "./layout/app.layout.component";
import { DashboardModule } from './demo/components/dashboard/dashboard.module';
import { LoginModule } from './demo/components/auth/login/login.module';
import { ProjectdetailComponent } from './demo/components/projectdetail/projectdetail.component';

const routes: Routes = [
    
    { path: 'project-detail/:id', component: ProjectdetailComponent },
  ];

@NgModule({
    imports: [
        RouterModule.forRoot([
            {   
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'login', loadChildren: () => import('./demo/components/auth/login/login.module').then(m => m.LoginModule)},
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },
                    { path: 'config', loadChildren: () => import('./demo/components/config/config.module').then(m => m.ConfigModule) } ,
                    { path: 'project-detail/:id', loadChildren: () => import('./demo/components/projectdetail/projectdetail.module').then(m => m.projectdetailModule) }
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'config', loadChildren: () => import('./demo/components/config/config.module').then(m => m.ConfigModule) } ,

            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
