import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  imports: [LayoutRoutingModule],
  exports:[LayoutRoutingModule],
  declarations: [LayoutComponent,DashboardComponent]
})
export class LayoutModule {
}
