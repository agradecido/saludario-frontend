import { Routes } from '@angular/router';
import { AddFoodEntryComponent } from './components/add-food-entry/add-food-entry.component';

export const routes: Routes = [
  // Ruta para la pantalla de introducción de alimentos
  { path: 'add-food-entry', component: AddFoodEntryComponent },
  
  // Redirección a la ruta principal por defecto
  { path: '', redirectTo: '/add-food-entry', pathMatch: 'full' }
];
