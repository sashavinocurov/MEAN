import { NewreviewComponent } from './newreview/newreview.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { NgModule, } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'restaurants', component: HomeComponent},
  {path: 'restaurants/create', component: CreateComponent},
  {path: 'restaurants/edit/:id', component: EditComponent},
  {path: 'restaurants/:id', component: RestaurantComponent},
  {path: 'restaurants/reviews/:id', component: NewreviewComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
