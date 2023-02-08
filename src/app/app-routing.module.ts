import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/departments-list', pathMatch: 'full' },
  { path: 'departments-list', component: DepartmentListComponent },
  { 
    path: 'departments-list/:id', 
    component: DepartmentDetailComponent,
    children: [
      { path: 'overview', component: DepartmentOverviewComponent },
      { path: 'contact', component: DepartmentContactComponent }
    ]
  },
  { path: 'employees', component: EmployeeListComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [  DepartmentListComponent,
                                    EmployeeListComponent,
                                    PagenotfoundComponent,
                                    DepartmentDetailComponent
                                ]
