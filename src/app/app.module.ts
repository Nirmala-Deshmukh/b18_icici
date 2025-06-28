import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pipe1Pipe } from './shared/pipe1.pipe';
import { Pipe2Pipe } from './shared/pipe2.pipe';
import { Dir1Directive } from './shared/dir1.directive';
import { Dir2Directive } from './shared/dir2.directive';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Pipe1Pipe,
    Pipe2Pipe,
    Dir1Directive,
    Dir2Directive,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
