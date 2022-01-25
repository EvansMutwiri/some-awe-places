import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AddNewComponent } from './create/add-new/add-new.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  //only redirect when the path is exactly blank
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'create', component: AddNewComponent},
  {path: '404', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['/404']);
    };
  }
 }
