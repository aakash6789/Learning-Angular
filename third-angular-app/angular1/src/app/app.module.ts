import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient} from '@angular/common/http';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    //   BrowserModule,
],
imports: [
      AppComponent,
      BrowserModule,
      FormsModule

  ],
  providers: [provideHttpClient()],
  bootstrap: []
})
export class AppModule { }
