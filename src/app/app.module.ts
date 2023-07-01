import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopnavModule } from "./components/top-nav/top-nav.module";
import { HomeModule } from './module/home/home.module';
import { FooterModule } from './components/footer/footer.module';
import { AppCommonModule } from './components/common.module';
import { ProfileModule } from './module/profile/profile.module';
import { LoginModule } from './auth/login/login.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        TopnavModule,
        HomeModule,
        FooterModule,
        AppCommonModule,
        ProfileModule,
        LoginModule
    ]
})
export class AppModule { }
