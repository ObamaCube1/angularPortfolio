import {Component, OnInit} from '@angular/core';
import {ProjectModel} from '../Models/project.model';
import {ProjectsService} from '../Services/projects.service';

@Component({
  selector: 'app-project-list',
  standalone: false,
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent implements OnInit {
 projects!: ProjectModel[];

 constructor(private projectsService: ProjectsService) {

 }

 ngOnInit() {
   this.projects = this.projectsService.getAllProjects();
 }

}
