import {Component, Input} from '@angular/core';
import {ProjectModel} from '../Models/project.model';
import {Router} from '@angular/router';
import {ProjectsService} from '../Services/projects.service';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project!: ProjectModel;

  constructor(private projectsService: ProjectsService, private router: Router) {
  }

  onButtonClick() {
    this.router.navigateByUrl('/home/'+this.project.id);
  }
}
