import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RoomComponent } from './components/room/room.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from 'src/environments/environment.prod';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InputNewRoomComponent } from './components/admin/input-new-room/input-new-room.component';
import { RoomChatComponent } from './components/room/room-chat/room-chat.component';
import { InputChangeNameComponent } from './components/room/input-change-name/input-change-name.component';

const config: SocketIoConfig = {
  url: environment.URL_BACKEND, // socket server url;
  options: {},
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RoomComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    ErrorPageComponent,
    InputNewRoomComponent,
    RoomChatComponent,
    InputChangeNameComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    AngularMaterialModule,
    FormsModule,
    SocketIoModule.forRoot(config),
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
