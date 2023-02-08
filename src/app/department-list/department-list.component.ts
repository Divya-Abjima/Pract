import { Component } from '@angular/core';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent {
  
  departments = [
    { 'id' : 1, 'name' : 'Angular'},
    { 'id' : 2, 'name' : 'MongoDB'},
    { 'id' : 3, 'name' : 'Node'},
    { 'id' : 4, 'name' : 'C#'}
  ]
  public selectedId:any;
  
  constructor(private router : Router, private route : ActivatedRoute) {}
  
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap) => {
      let id = parseInt(params.get('id') as string);
      this.selectedId = id;
    })
  }
  
  onSelect(department:any) {
    //this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], {relativeTo: this.route});
  }
  isSelected(department:any) {
    return department.id === this.selectedId;
  }
}
