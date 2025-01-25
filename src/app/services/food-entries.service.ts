import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodEntriesService {
  private apiUrl = 'http://localhost:5000/api/food-entries';

  constructor(private http: HttpClient) {}

  addFoodEntry(food: any, token: string) {
    return this.http.post(this.apiUrl, food, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
