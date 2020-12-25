import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GebruikersComponent } from './pages/gebruikers/gebruikers.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
    { path: '', component: GebruikersComponent  }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
