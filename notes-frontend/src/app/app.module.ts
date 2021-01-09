import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GebruikersComponent } from './pages/gebruikers/gebruikers.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { NotesDetailsComponent } from './pages/notes-details/notes-details.component';
import { NotesEditComponent } from './pages/notes-edit/notes-edit';

@NgModule({
  declarations: [
    AppComponent,
    GebruikersComponent,
    NotesListComponent,
    MainLayoutComponent,
    NotesDetailsComponent,
    NotesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
