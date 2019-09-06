import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './content/main/main.component'
import { ErrorPageComponent } from './content/error-page/error-page.component'

const routes: Routes = [
  { path: 'error', component: ErrorPageComponent },
  { path: 'page1and2ajax', component: MainComponent },
  { path: '', pathMatch: 'full', redirectTo: 'page1and2ajax' },
  { path: '**', pathMatch: 'full', redirectTo: 'error' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
