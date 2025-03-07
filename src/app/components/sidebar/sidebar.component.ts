import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { DataService } from '../../services/data.service';
import { Mower } from '../../models/mower.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [
      CommonModule,
  ]
})
export class SidebarComponent implements OnInit {
  mowers: Mower[] = [];
  currentView: string = 'map';

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataService.mowers$.subscribe(mowers => {
      this.mowers = mowers;
    });
  }

  navigateTo(view: string): void {
    this.currentView = view;
    this.router.navigate([view]);
  }

  toggleMowerSelection(id: number): void {
    this.dataService.toggleMowerSelection(id);
  }
}