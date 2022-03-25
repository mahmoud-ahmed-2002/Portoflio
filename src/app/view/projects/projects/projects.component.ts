import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  modalOne:boolean=false
  modalTwo:boolean=false
  modalThree:boolean=false
  modalFour:boolean=false
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
