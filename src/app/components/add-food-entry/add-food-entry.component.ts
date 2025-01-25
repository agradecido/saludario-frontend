import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para ngModel

@Component({
  standalone: true, // Indica que este componente es standalone
  imports: [NgIf, NgFor, FormsModule], // Importa FormsModule y directivas necesarias
  selector: 'app-add-food-entry',
  templateUrl: './add-food-entry.component.html',
  styleUrls: ['./add-food-entry.component.scss']
})
export class AddFoodEntryComponent {
  food = {
    name: '',
    category: 'Breakfast',
    notes: ''
  };

  onSubmit() {
    console.log('Food entry submitted:', this.food);
  }
}
