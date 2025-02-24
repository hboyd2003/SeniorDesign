import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule, MatLabel} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {MatToolbar} from "@angular/material/toolbar";
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {MatDivider} from "@angular/material/divider";
import {FormsModule} from "@angular/forms";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatListItem, MatListItemMeta, MatListItemTitle, MatNavList} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatButtonModule,
    MatIconModule,
    NgForOf,
    RouterModule.forRoot(appRoutes),
    MatDrawerContent,
    MatDrawerContainer,
    MatNavList,
    MatListItem,
    MatListItemTitle,
    MatDrawer,
    MatListItemMeta
  ],
  providers: [
    provideAnimationsAsync()
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
