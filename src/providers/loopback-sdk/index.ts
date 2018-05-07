/* tslint:disable */
/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MIT 2016 Jonathan Casarrubias
* @version 2.1.0
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root 
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/
import { ErrorHandler } from './services/core/error.service';
import { LoopBackAuth } from './services/core/auth.service';
import { LoggerService } from './services/custom/logger.service';
import { SDKModels } from './services/custom/SDKModels';
import { InternalStorage, SDKStorage } from './storage/storage.swaps';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CookieBrowser } from './storage/cookie.browser';
import { StorageBrowser } from './storage/storage.browser';
import { SocketBrowser } from './sockets/socket.browser';
import { SocketDriver } from './sockets/socket.driver';
import { SocketConnection } from './sockets/socket.connections';
import { RealTime } from './services/core/real.time';
import { UserApi } from './services/custom/User';
import { App_accessApi } from './services/custom/App_access';
import { App_detailsApi } from './services/custom/App_details';
import { CityApi } from './services/custom/City';
import { Contractor_affiliation_masterApi } from './services/custom/Contractor_affiliation_master';
import { Contractor_affiliation_mappingApi } from './services/custom/Contractor_affiliation_mapping';
import { Contractor_profileApi } from './services/custom/Contractor_profile';
import { Contractor_specialization_masterApi } from './services/custom/Contractor_specialization_master';
import { Equipments_mappingApi } from './services/custom/Equipments_mapping';
import { Equipments_masterApi } from './services/custom/Equipments_master';
import { Project_photosApi } from './services/custom/Project_photos';
import { ProjectsApi } from './services/custom/Projects';
import { Type_of_housing_masterApi } from './services/custom/Type_of_housing_master';
import { Work_groupApi } from './services/custom/Work_group';
import { ContainerApi } from './services/custom/Container';
import { Type_of_housing_mappingApi } from './services/custom/Type_of_housing_mapping';
import { Contractor_specialization_mappingApi } from './services/custom/Contractor_specialization_mapping';
import { Accredited_suppliesApi } from './services/custom/Accredited_supplies';
import { Construction_stage_masterApi } from './services/custom/Construction_stage_master';
import { Construction_stage_mappingApi } from './services/custom/Construction_stage_mapping';
import { EmailApi } from './services/custom/Email';
import { BooksApi } from './services/custom/Books';
import { PagesApi } from './services/custom/Pages';
import { ChaptersApi } from './services/custom/Chapters';
import { VideosApi } from './services/custom/Videos';
import { MunicipalityApi } from './services/custom/Municipality';
/**
* @module SDKBrowserModule
* @description
* This module should be imported when building a Web Application in the following scenarios:
*
*  1.- Regular web application
*  2.- Angular universal application (Browser Portion)
*  3.- Progressive applications (Angular Mobile, Ionic, WebViews, etc)
**/
@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [ ],
  exports:      [ ],
  providers:    [
    ErrorHandler,
    SocketConnection
  ]
})
export class SDKBrowserModule {
  static forRoot(internalStorageProvider: any = {
    provide: InternalStorage,
    useClass: CookieBrowser
  }): ModuleWithProviders {
    return {
      ngModule  : SDKBrowserModule,
      providers : [
        LoopBackAuth,
        LoggerService,
        SDKModels,
        RealTime,
        UserApi,
        App_accessApi,
        App_detailsApi,
        CityApi,
        Contractor_affiliation_masterApi,
        Contractor_affiliation_mappingApi,
        Contractor_profileApi,
        Contractor_specialization_masterApi,
        Equipments_mappingApi,
        Equipments_masterApi,
        Project_photosApi,
        ProjectsApi,
        Type_of_housing_masterApi,
        Work_groupApi,
        ContainerApi,
        Type_of_housing_mappingApi,
        Contractor_specialization_mappingApi,
        Accredited_suppliesApi,
        Construction_stage_masterApi,
        Construction_stage_mappingApi,
        EmailApi,
        BooksApi,
        PagesApi,
        ChaptersApi,
        VideosApi,
        MunicipalityApi,
        internalStorageProvider,
        { provide: SDKStorage, useClass: StorageBrowser },
        { provide: SocketDriver, useClass: SocketBrowser }
      ]
    };
  }
}
/**
* Have Fun!!!
* - Jon
**/
export * from './models/index';
export * from './services/index';
export * from './lb.config';
export * from './storage/storage.swaps';
export { CookieBrowser } from './storage/cookie.browser';
export { StorageBrowser } from './storage/storage.browser';

