import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Mower } from '../models/mower.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private mowers: BehaviorSubject<Mower[]> = new BehaviorSubject<Mower[]>([]);
  public mowers$: Observable<Mower[]> = this.mowers.asObservable();
  private apiUrl = '/api/mowers';

  constructor(private http: HttpClient) {
    this.loadMowers();
  }

  private loadMowers(): void {
    // In a real app, this would fetch from your SQLite database via an API
    // For demo purposes, we'll use mock data
    const mockMowers: Mower[] = [
      { id: 1, name: 'Mower 1', latitude: 40.7128, longitude: -74.0060, status: 'Active', lastActive: new Date(), batteryLevel: 85, isSelected: true },
      { id: 2, name: 'Mower 2', latitude: 40.7142, longitude: -74.0119, status: 'Charging', lastActive: new Date(), batteryLevel: 42, isSelected: true },
      { id: 3, name: 'Mower 3', latitude: 40.7112, longitude: -74.0018, status: 'Idle', lastActive: new Date(), batteryLevel: 96, isSelected: false }
    ];
    this.mowers.next(mockMowers);
  }

  // In a real app, these methods would interact with your backend API
  getAllMowers(): Observable<Mower[]> {
    return this.mowers$;
  }

  addMower(mower: Mower): void {
    const currentMowers = this.mowers.getValue();
    // Simulate ID generation
    mower.id = currentMowers.length ? Math.max(...currentMowers.map(m => m.id)) + 1 : 1;
    this.mowers.next([...currentMowers, mower]);
  }

  deleteMower(id: number): void {
    const currentMowers = this.mowers.getValue();
    this.mowers.next(currentMowers.filter(mower => mower.id !== id));
  }

  toggleMowerSelection(id: number): void {
    const currentMowers = this.mowers.getValue();
    const updatedMowers = currentMowers.map(mower => {
      if (mower.id === id) {
        return { ...mower, isSelected: !mower.isSelected };
      }
      return mower;
    });
    this.mowers.next(updatedMowers);
  }
}
