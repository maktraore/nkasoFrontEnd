import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { RoomComponent } from './components/room/room.component';
import { SaleComponent } from './components/sale/sale.component';
import { UserComponent } from './components/user/user.component';
import { ClientComponent } from './components/client/client.component';
import { BookingComponent } from './components/booking/booking.component';
import { AddApartmentComponent } from './components/add-apartment/add-apartment.component';
import { AddRoomComponent } from './components/add-room/add-room.component';
import { AddSaleComponent } from './components/add-sale/add-sale.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddBookingComponent } from './components/add-booking/add-booking.component';
import { UpdateBookingComponent } from './components/update-booking/update-booking.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ApartmentComponent,
    RoomComponent,
    SaleComponent,
    UserComponent,
    ClientComponent,
    BookingComponent,
    AddApartmentComponent,
    AddRoomComponent,
    AddSaleComponent,
    AddUserComponent,
    AddBookingComponent,
    UpdateBookingComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
