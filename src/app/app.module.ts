import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { MySelectorBarComponent } from './my-selector-bar/my-selector-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocalStorageServiceService } from './local-storage-service.service';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { RouterContainerComponent } from './router-container/router-container.component';
import { AppRoutingModule } from './app-routing.module';
import { EditPlaylistComponent } from './edit-playlist/edit-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    MySelectorBarComponent,
    DashboardComponent,
    CreatePlaylistComponent,
    RouterContainerComponent,
    EditPlaylistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    LocalStorageServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
