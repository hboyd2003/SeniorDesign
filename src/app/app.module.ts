// File: src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Add this import

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MapComponent } from './components/map/map.component';
import { MowerManagerComponent } from './components/mower-manager/mower-manager.component';
import { DataService } from './services/data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot([
      { path: 'map', component: MapComponent },
      { path: 'mower-manager', component: MowerManagerComponent },
      { path: '', redirectTo: '/map', pathMatch: 'full' },
    ]),
    // Import the standalone components here
    MapComponent,
    MowerManagerComponent,
    SidebarComponent
  ],
  declarations: [
    AppComponent,
    // Remove the standalone components from declarations
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }