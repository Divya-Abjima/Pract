import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent {

  public deptId = 0;

  constructor(private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    // let id= parseInt(this.route.snapshot.paramMap.get("id") as string);
    // this.deptId = id;
    this.route.paramMap.subscribe((params:ParamMap) => {
      let id = parseInt(params.get('id') as string);
      this.deptId = id;
    })
  }
  goPrev() {
    let prevId = this.deptId - 1;
    this.router.navigate([{id: prevId}], {relativeTo:this.route});
  }
  goNext() {
    let nextId = this.deptId + 1;
    this.router.navigate([{id: nextId}], {relativeTo:this.route});
  }
  gotoDepartments() {
    let selectedId = this.deptId ? this.deptId : null;
    //this.router.navigate(['/departments', {id: selectedId}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo : this.route});
  }
  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.route});
  }
  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.route});
  }
}
