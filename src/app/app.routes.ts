import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: '**', redirectTo: '' }
];
