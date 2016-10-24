import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';
import { AppRoutingModule }     from './app-routing.module';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

/**
 * 
 * This is app main module.
 * Angular has its own modularity system called Angular modules or NgModules. 
 * Every Angular app has at least one module, the root module, conventionally named AppModule.
 * NgModule is a decorator function that takes a single metadata object whose properties describe the module. The most important properties are:
 * 
 * declarations - the view classes that belong to this module. Angular has three kinds of view classes: components, directives, and pipes.
 * exports - the subset of declarations that should be visible and usable in the component templates of other modules.
 * imports - other modules whose exported classes are needed by component templates declared in this module.
 * providers - creators of services that this module contributes to the global collection of services; they become accessible in all parts of the app.
 * bootstrap - the main application view, called the root component, that hosts all other app views. Only the root module should set this bootstrap property.
 * 
 */