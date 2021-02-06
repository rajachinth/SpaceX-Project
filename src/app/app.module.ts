import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DisplayDataComponent } from "./display-data/display-data.component";
import { CategoryDataComponent } from "./category-data/category-data.component";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HTTP_Request } from "./Services/HTTP_Interceptor_Request";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { NgxPaginationModule } from "ngx-pagination";
import { SpaceXServiceService } from "./Services/space-xservice.service";
import { HTTP_Response } from "./Services/HTTP_Interceptor_Response";

const routes: Routes = [
  { path: "home", component: HomePageComponent, pathMatch: "full" },
  { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  declarations: [
    AppComponent,
    DisplayDataComponent,
    CategoryDataComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    SpaceXServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: HTTP_Request, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HTTP_Response, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
