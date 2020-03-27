import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { RegProviderComponent } from './provider/reg-provider/reg-provider.component';
import { GetProviderComponent } from './provider/get-provider/get-provider.component';
import { ProviderService } from './shared-service/provider.service';
import { UpdateProviderComponent } from './provider/update-provider/update-provider.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ProviderLoginComponent } from './provider-login/provider-login.component';
import { NavBarEventsComponent } from './nav-bar-events/nav-bar-events.component';
import { LoginService } from './shared-service/login.service';
import { AuthGuard } from './auth.guard';
import { SaveServiceComponent } from './services/save-service/save-service.component';
import { CategoryComponent } from './category/category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category/sub-category.component';
import { GetcategoryComponent } from './category/getcategory/getcategory.component';
import { GetsubcategoryComponent } from './sub-category/getsubcategory/getsubcategory.component';
import { CategoryService } from './shared-service/category.service';
import { SubcategoryService } from './shared-service/subcategory.service';
import { GetCustomerComponent } from './customer/get-customer/get-customer.component';
import { RegCustomerComponent } from './customer/reg-customer/reg-customer.component';
import { CustomerService } from './shared-service/customer.service';
import { ServiceService } from './shared-service/service.service';
import { GetServicesComponent } from './services/get-services/get-services.component';
import { ErrorComponent } from './error/error/error.component';
import { NewSaveServiceComponent } from './services/new-save-service/new-save-service.component';
import { BookServiceComponent } from './book/book-service/book-service.component';
import { BookingServiceService } from './shared-service/booking-service.service';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

const appRoutes:Routes = [
  {path:'regprovider', component:RegProviderComponent},
  {path:'getprovider', canActivate:[AuthGuard] , component:GetProviderComponent},
  {path:'getprovider/:id', canActivate:[AuthGuard] , component:GetProviderComponent},
  {path:'updateprovider', canActivate:[AuthGuard] , component:UpdateProviderComponent},
  {path:'login', component:LoginComponent},
  {path:'about', component:AboutComponent},
  {path:'loginprovider', component:ProviderLoginComponent},
  {path:'savecategory', component:CategoryComponent},
  {path:'getcategory/:id', component:GetcategoryComponent},
  {path:'savesubcategory', component:SubCategoryComponent},
  {path:'getsubcategory/:id', component:GetsubcategoryComponent},
  {path:'saveservice/:id', canActivate:[AuthGuard],component:SaveServiceComponent},
  {path:'newsaveservice/:id', canActivate:[AuthGuard],component:NewSaveServiceComponent},
  {path:'getservice/:id', component:GetServicesComponent},
  {path:'regcustomer', component:RegCustomerComponent},
  {path:'getcustomer/:id', component:GetCustomerComponent},
  {path:'bookservice/:id', component:BookServiceComponent},
  {path:'myadminiskrst', component:AdminComponent},
  {path:'myadminiskrstlogin', component:AdminLoginComponent},
  {path:'error/:msg', component:ErrorComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    RegProviderComponent,
    GetProviderComponent,
    UpdateProviderComponent,
    LoginComponent,
    AboutComponent,
    ProviderLoginComponent,
    NavBarEventsComponent,
    SaveServiceComponent,
    CategoryComponent,
    SubCategoryComponent,
    GetcategoryComponent,
    GetsubcategoryComponent,
    GetCustomerComponent,
    RegCustomerComponent,
    GetServicesComponent,
    ErrorComponent,
    NewSaveServiceComponent,
    BookServiceComponent,
    AdminComponent,
    AdminLoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProviderService,
    LoginService,
    AuthGuard,
    CategoryService,
    SubcategoryService,
    CustomerService,
    ServiceService,
    BookingServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
