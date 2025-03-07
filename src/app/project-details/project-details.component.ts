import {Component, OnInit} from '@angular/core';
import {ProjectModel} from '../Models/project.model';
import {ProjectsService} from '../Services/projects.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-project-details',
  standalone: false,
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit {
  project!: ProjectModel

  constructor(private projectsService: ProjectsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.project = this.projectsService.getProjectById(id);
  }
}
