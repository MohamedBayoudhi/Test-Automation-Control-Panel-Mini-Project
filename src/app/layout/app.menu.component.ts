import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
          
          
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Overview',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['']
                    },
                    { // this auto
                        label: 'Projects',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Project 1',
                                icon: 'pi pi-box',
                                routerLink: ['/project-detail', '1']
                            },
                            {
                                label: 'Project 2',
                                icon: 'pi pi-box',
                                routerLink: ['/project-detail', '2']
                            },
                            {
                                label: 'Project 3',
                                icon: 'pi pi-box',
                                routerLink: ['/project-detail', '3']
                            }
                        ]
                    },
                    {
                        label: 'Configuration',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/config']
                    },
                   
                ]
            },
           
           
        ];
    }
}
