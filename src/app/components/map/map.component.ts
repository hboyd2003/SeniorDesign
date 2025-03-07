import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Mower } from '../../models/mower.model';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  private map: any;
  private markers: { [key: number]: L.Marker } = {};
  mowers: Mower[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.mowers$.subscribe(mowers => {
      this.mowers = mowers;
      if (this.map) {
        this.updateMarkers();
      }
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([40.7128, -74.0060], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.updateMarkers();
  }

  private updateMarkers(): void {
    // Remove all current markers
    Object.values(this.markers).forEach(marker => this.map.removeLayer(marker));
    this.markers = {};

    // Add markers for selected mowers
    this.mowers
      .filter(mower => mower.isSelected)
      .forEach(mower => {
        const marker = L.marker([mower.latitude, mower.longitude])
          .addTo(this.map)
          .bindPopup(`
            <strong>${mower.name}</strong><br>
            Status: ${mower.status}<br>
            Battery: ${mower.batteryLevel}%<br>
            Last Active: ${mower.lastActive.toLocaleString()}
          `);
        this.markers[mower.id] = marker;
      });
  }
}