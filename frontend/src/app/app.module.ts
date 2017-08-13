import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {LandingpageComponent} from "../landingpage/landingpage.component";

const appRoutes: Routes = [
    { path: '',          component: LandingpageComponent }
    // { path: 'dashboard', component: DashboardComponent },
    // { path: 'form/:id', component: FormComponent },
];

@NgModule({
    declarations: [
        AppComponent, LandingpageComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
