// import { HttpClientModule } from '@angular/common/http';

// @NgModule({
//     declarations: [AppComponent],
//     imports: [HttpClientModule],
//     providers: [],
//     bootstrap: [AppComponent]
// })
// export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Assure-toi d'importer FormsModule ici
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,   // Ajoute FormsModule ici
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

