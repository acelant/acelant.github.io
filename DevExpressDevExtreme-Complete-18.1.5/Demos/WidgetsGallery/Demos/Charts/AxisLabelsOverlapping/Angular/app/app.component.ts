import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxChartModule, DxSelectBoxModule } from 'devextreme-angular';

import { Service, PopulationData } from './app.service';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'demo-app',
    providers: [Service],
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
    population: PopulationData[];
    currentMode: string;
    overlappingModes: string[];
    constructor(service: Service) {
        this.population = service.getPopulation();
        this.currentMode = service.getOverlappingModes()[0];
        this.overlappingModes = service.getOverlappingModes();
    }
}

@NgModule({
    imports: [
        BrowserModule,
        DxChartModule,
        DxSelectBoxModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);