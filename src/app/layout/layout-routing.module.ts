import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router"; 

import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './../gurads/auth.guard';

export const routes: Routes = [    
    {
      path: 'app',
      component: LayoutComponent,
      children: [
        { path: '',  component: DashboardComponent },
        { path: 'dashboard', component: DashboardComponent},   
        { path: '**',redirectTo: 'dashboard'},  
      ],
      canActivate: [AuthGuard]
    }
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LayoutRoutingModule {}