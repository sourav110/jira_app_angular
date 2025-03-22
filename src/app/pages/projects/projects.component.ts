import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Project } from '../../models/dataModels';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  imports: [FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  objProject: Project = new Project();
  projectList: Project[] = [];

  http = inject(HttpClient);

  openModal() {
    debugger
    const modal = document.getElementById('myModal');
    if(modal != null) {
      modal.style.display = 'block';
    }
  }

  closeModal() {
    debugger
    const modal = document.getElementById('myModal');
    if(modal != null) {
      modal.style.display = 'none';
    }
  }

  getAllProject() {
    
  }

  saveProject() {
    alert('Ok');
    this.objProject = new Project();
    this.closeModal();
    
    // debugger
    // this.http.post("https://freeapi.miniprojectideas.com/api/Jira/CreateProject", this.objProject).subscribe((res: any) => {
      
    //   // if(res.result) {
    //   //   alert('Saved');
    //   // } else {
    //   //   alert(res.message);
    //   // }
    // })
  }
  
}
