import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router"; 
import { AuthGuard } from './gurads/auth.guard';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: '404', component: PageNotFoundComponent },
    { path: 'app', redirectTo: 'app' },
    { path: '**', redirectTo: '404' },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
  })
  export class AppRoutingModule {}