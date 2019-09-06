import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { GridComponent } from './grid/grid.component';
import { DetailGridComponent } from './detail-grid/detail-grid.component';


@NgModule({
  declarations: [ErrorPageComponent, HeaderComponent, NavComponent, MainComponent, GridComponent, DetailGridComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorPageComponent, // manual
    HeaderComponent, // manual
    NavComponent, // manual
    MainComponent, // manual
    GridComponent, // manual
    DetailGridComponent // manual
  ],

})
export class ContentModule { }
