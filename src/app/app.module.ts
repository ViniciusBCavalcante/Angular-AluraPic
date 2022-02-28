import { AppRoutingModule } from './app-routing.module';
import { ErrorsModule } from './errors/errors.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { PhotosModule } from './photos/photos.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PhotosModule, ErrorsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
