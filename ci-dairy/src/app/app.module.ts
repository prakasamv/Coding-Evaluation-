import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayFunComponent } from './components/array-fun/array-fun.component';
import { ArrayReduceComponent } from './components/array-fun/array-reduce/array-reduce.component';
import { StringFunComponent } from './components/string-fun/string-fun.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayFunComponent,
    ArrayReduceComponent,
    StringFunComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
