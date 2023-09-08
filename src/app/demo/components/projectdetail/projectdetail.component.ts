import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  
})
export class ProjectdetailComponent  implements OnInit{

  projectId: string;
  project: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.projectId = params['id'];
      // Use HttpClient to fetch project details from projects.json
      this.http.get('assets/data/projects.json').subscribe((data: any) => {
        console.log(data); // Log the data received from the JSON file
        const projects = data.data;
        this.project = projects.find((p: any) => p.id === this.projectId);
        console.log(this.project); // Log the found project
      });
    });
  }

}
