import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {LandingpageComponent} from "../landingpage/landingpage.component";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {FormComponent} from "../form/form.component";
import {NavigationComponent} from "../navigation/navigation.component";
import {FoooterComponent} from "../foooter/foooter.component";

const appRoutes: Routes = [
    { path: '',          component: LandingpageComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'form/:id', component: FormComponent },
    { path: 'new', component: FormComponent}
];

@NgModule({
    declarations: [
        AppComponent, LandingpageComponent, DashboardComponent, FormComponent, NavigationComponent, FoooterComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
