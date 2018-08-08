import { NgModule, Component, ViewChild, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxListModule,
        DxButtonModule,
        DxTagBoxModule,
        DxFilterBuilderComponent,
        DxFilterBuilderModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import { Service } from './app.service';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

let anyOfOperation = {
        name: "anyof",
        caption: "Is any of",
        icon: "check",
        editorTemplate: "tagBoxTemplate",
        calculateFilterExpression(filterValue: any, field: any) {
            if(filterValue && filterValue.length > 0) {
                var result = [],
                    lastIndex = filterValue.length - 1;
                filterValue.forEach((value, index) => {
                    result.push([field.dataField, "=", value]);
                    if(index !== lastIndex) {
                        result.push("or");
                    }
                });
                return result;
            }
        }
    };

@Component({
    selector: 'demo-app',
    providers: [Service],
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
    @ViewChild(DxFilterBuilderComponent) filterBuilder: DxFilterBuilderComponent;
    dataSource: any;
    fields: Array<any>;
    customOperations: Array<any>;
    filter: any;
    categories: string[];

    constructor(service: Service) {
        this.fields = service.getFields();
        this.filter = service.getFilter();
        this.categories = service.getCategories();
        this.customOperations = [anyOfOperation];
        this.dataSource = new DataSource({
            store: service.getProducts()
        });
    }
    
    refreshDataSource() {        
        this.dataSource.filter(this.filterBuilder.instance.getFilterExpression());
        this.dataSource.load();
    }    
}

@NgModule({
    imports: [
        BrowserModule,
        DxListModule,
        DxButtonModule,
        DxTagBoxModule,
        DxFilterBuilderModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);