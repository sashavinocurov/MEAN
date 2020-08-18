import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewstudentComponent } from './components/newstudent/newstudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'newplaya', component: NewstudentComponent},
  {path: 'editThisSucka/:id', component: UpdatestudentComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
