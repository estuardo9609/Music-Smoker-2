import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RouterContainerComponent} from './router-container/router-container.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EditPlaylistComponent} from './edit-playlist/edit-playlist.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create-playlist', component: RouterContainerComponent },
  { path: 'edit/:id', component: EditPlaylistComponent }
];
 

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
