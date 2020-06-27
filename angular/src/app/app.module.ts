import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}  from '@angular/forms';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{RouterModule, Routes}from'@angular/router'
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatCardModule, MatButtonModule} from '@angular/material'
import {MatMenuModule} from '@angular/material/menu';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import { HeadSlideComponent } from './ad-head-slide/head-slide.component';
import { CardComponent } from './card/card.component';
import { SlideHeadComponent } from './slide-head/slide-head.component';
import { SlideFootComponent } from './slide-foot/slide-foot.component';
import { SlideFootOneComponent } from './slide-foot-one/slide-foot-one.component';
import {FooterComponent} from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { TeamComponent } from './team/team.component';
import { ProductComponent } from './product/product.component';
import{RegistrationComponent} from './registration/registration.component'
import{FormAddComponent} from './form-add/form-add.component';
import { AdminAddPageComponent } from './admin-add-page/admin-add-page.component';
import { UserOrderComponent } from './user-order/user-order.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { OrderAcceptedComponent } from './order-accepted/order-accepted.component';
import { SearchPageComponent } from './search-page/search-page.component'
import {AboutPageComponent} from './about-page/about-page.component'


const routes:Routes=[
  
  {component:AboutPageComponent,path:'about'},
  {component:HomePageComponent,path:'home'},
  {component:HomePageComponent,path:' '},
  {component:LoginComponent,path:'login'},
  {component:RegistrationComponent,path:'register'},
  {component:UserOrderComponent,path:'orderhandle'},
  {component:AdminAddPageComponent,path:'adminAdd'},
  {component:OrderAcceptedComponent,path:'userorder'},
  {component:SearchPageComponent,path:'searchcat'},
  {component:MainNavComponent,path:'header'},

  {component:ProfileComponent,path:'profile'},
  {component:ProductComponent,path:'product'},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
 //the id to get that product value 
  {component:CardComponent,path:'card/:id'},
  //---------------------------------------------------------------------
  //not found component 
]

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    FooterComponent,
   
    MainNavComponent,
    HeadSlideComponent,
    CardComponent,
    SlideHeadComponent,
    SlideFootComponent,
    SlideFootOneComponent,
    LoginComponent,
    HomePageComponent,
    RegisterComponent,
    ProfileComponent,
    TeamComponent,
    ProductComponent,
    RegistrationComponent,
    FormAddComponent,
    AdminAddPageComponent,
    UserOrderComponent,
    AdminProductComponent,
    OrderAcceptedComponent,
    SearchPageComponent
    
  ],
  imports: [
    
    HttpClientModule,
    MatTooltipModule ,
    MatCardModule,
    BrowserModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    //the router pathes
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
