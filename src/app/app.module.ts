import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InteractComponent } from './interact/interact.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { EmployeeService } from './employee.service';


@NgModule({
  declarations: [
    AppComponent,
    InteractComponent,
    PipesComponent,
    EmplistComponent,
    EmpdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
