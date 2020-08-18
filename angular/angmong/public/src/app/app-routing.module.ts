import { EditComponent } from './edit/edit.component';
import { InfoComponent } from './info/info.component';
import { NewComponent } from './new/new.component';
import { PetsComponent } from './pets/pets.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: 'pets', component: PetsComponent},
  {path: 'new', component: NewComponent},
  {path: 'info/:id', component: InfoComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: '', pathMatch: 'full', redirectTo: '/pets'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
