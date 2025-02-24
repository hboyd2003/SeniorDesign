import { Component } from '@angular/core';
import {MatDrawerContainer} from '@angular/material/sidenav';

interface NavLink {
  label: string;
  path: string;
  icon: string;
}

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SeniorDesign';
  navLinks: NavLink[] = [{label: 'Map', path: 'map', icon: 'map'}, {
    label: 'Other Page',
    path: 'otherpage',
    icon: 'question_mark'
  }];
}
