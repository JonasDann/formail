import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {LandingpageComponent} from "../landingpage/landingpage.component";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {FormviewerComponent} from "../formviewer/formviewer.component";
import {NavigationComponent} from "../navigation/navigation.component";
import {FoooterComponent} from "../foooter/foooter.component";
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
    { path: '',          component: LandingpageComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'form/:id', component: FormviewerComponent },
    { path: 'new', component: FormviewerComponent }
];

@NgModule({
    declarations: [
        AppComponent, LandingpageComponent, DashboardComponent, FormviewerComponent, NavigationComponent, FoooterComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
