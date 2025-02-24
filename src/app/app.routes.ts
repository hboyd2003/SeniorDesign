import { Routes } from '@angular/router';
import {MapPageComponent} from './components/map-page/map-page.component';
import {OtherpageComponent} from "./components/otherpage/otherpage.component";

export const appRoutes: Routes = [{path: 'map', component: MapPageComponent},
    {path: 'otherpage', component: OtherpageComponent}];
