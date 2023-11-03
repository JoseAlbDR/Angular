import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CustomListComponent } from './components/custom-list/custom-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchButtonComponent } from './components/search-button/button-search-by.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    CustomListComponent,
    HomePageComponent,
    LazyImageComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SidebarComponent,
    SearchButtonComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LazyImageComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SidebarComponent,
    SearchButtonComponent,
  ],
})
export class SharedModule {}
