import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ProjectService } from 'src/app/project.service';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {Project} from 'src/app/demo/components/project';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent  {
        projects! : Project[];
        filteredProjects: Project[] = [];
        searchTerm: string = '';

        constructor(private ps: ProjectService , private http: HttpClient ){}
        ngOnInit() {
            this.http.get('assets/data/projects.json').subscribe((data: any) => {
              this.projects = data.data;
              this.filteredProjects = this.projects;
            });
          }
        
          filterProjects() {
            this.filteredProjects = this.projects.filter((project) => {
              return (
                project.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                project.latestTestDate.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                project.successTestCases.toString().includes(this.searchTerm) ||
                project.failedTestCases.toString().includes(this.searchTerm)
              );
            });
          }
}
