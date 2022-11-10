import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  rooms!: Room[];
  constructor(private rs:RoomService, private route:ActivatedRoute){}
 
  ngOnInit(): void {
    //+ will change the string number to a number
    this.route.params.subscribe(()=> {
      const param = this.route.snapshot.paramMap.get("rid");
      const rid = param?+param:1;
      this.findRoom(rid);
   } );
}
findRoom(rid:number) {
  this.rs.findAllRooms(rid).subscribe((data: Room[]) =>{this.rooms=data});
}
}
