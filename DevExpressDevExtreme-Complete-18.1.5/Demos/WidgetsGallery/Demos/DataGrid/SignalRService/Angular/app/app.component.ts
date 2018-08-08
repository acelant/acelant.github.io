import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'demo-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
    dataSource: any;

    constructor() {
        var connection = $["connection"];
        connection.hub.url = "https://js.devexpress.com/Demos/Mvc/signalr";
        var hub = connection.liveUpdateSignalRHub;
        var arrayStore;

        hub.client.updateStockPrice = (data) => {
            if (arrayStore) {
                arrayStore.update(data.Symbol, data);
                this.dataSource.reload();
            }
        };

        connection.hub.start({ waitForPageLoad: false }).done(() => {
            hub.server.getAllStocks().done((data) => {
                arrayStore = new ArrayStore({
                    key: "Symbol",
                    data: data
                });
                this.dataSource = new DataSource({
                    store: arrayStore
                });               
            });
        });
    }

    gridInitialized = (e) => e.component.beginCustomLoading()
}

@NgModule({
    imports: [
        BrowserModule,
        DxDataGridModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);