import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'; // Importa TranslateModule
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para ngModel

@Component({
  standalone: true, // Indica que este componente es standalone
  imports: [TranslateModule, FormsModule, NgIf, NgFor], // Asegúrate de incluir TranslateModule aquí
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
