import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GebruikersComponent } from './pages/gebruikers/gebruikers.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import {NotesDetailsComponent} from './pages/notes-details/notes-details.component';
import { NotesEditComponent } from './pages/notes-edit/notes-edit';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'notities/gebruikers',
    pathMatch: "full"
  },
  {
    path: 'notities/gebruikers',
    component: GebruikersComponent
  },
  {
    path: 'notities/gebruikers/:gebruiker',
    component: NotesListComponent
  },
  {
    path: 'notities/gebruikers/:gebruiker/notes-details',
    component: NotesDetailsComponent
  },
  {
    path: 'notities/gebruikers/:gebruiker/notes/:note/edit',
    component: NotesEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  bootstrap: [MainLayoutComponent]
})
export class AppRoutingModule { }
