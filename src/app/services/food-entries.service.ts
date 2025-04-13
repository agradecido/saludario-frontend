import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class FoodEntriesService {
  private apiUrl = `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.foodEntries}`;

  constructor(private http: HttpClient) {}

  addFoodEntry(food: any, token: string) {
    return this.http.post(this.apiUrl, food, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
