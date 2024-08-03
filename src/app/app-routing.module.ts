import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [

  {path:'Dash',component:DashboardComponent},
  {path:'Port',component:PortfolioComponent},
  {path:'Work',component:WorkComponent},
  {path:'',pathMatch:"full",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
