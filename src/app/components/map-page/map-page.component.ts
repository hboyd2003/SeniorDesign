import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrl: './map-page.component.css'
})

export class MapPageComponent implements OnInit {
  private map!: L.Map;

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([32.610085470353674, -85.48613241071733], 13); // Set initial location and zoom

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);
  }
}
