import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoomComponent } from './components/add-room/add-room.component';
import { RoomComponent } from './components/room/room.component';

const routes: Routes = [
  {path: 'rooms/:cid', component:RoomComponent},
  {path: 'home', component:RoomComponent},
  {path: 'addProduct', component:AddRoomComponent},
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: '', redirectTo: 'roomDetail', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
