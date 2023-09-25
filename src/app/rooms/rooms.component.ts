import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Room, RoomList } from './IRooms';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'HotelApp-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  selectedRoom!: RoomList;
  title = 'Room List';
  rooms: Room = {
    availableRooms: 0,
    unavailableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20,
  };
  roomList: RoomList[] = [];
  @ViewChild(HeaderComponent, { static: true })
  headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  ngDoCheck() {
    console.log('on changes is called');
  }

  addRoom() {
    if (this.rooms.availableRooms !== undefined) {
      this.rooms.availableRooms++;
    }
  }
  delRoom() {
    if (this.rooms.availableRooms !== undefined) {
      if (this.rooms.availableRooms >= 1) {
        this.rooms.availableRooms--;
      }
    }
  }
  toggleTitle() {
    if (this.title === 'Room List') {
      this.title = 'Rooms List';
    } else if (this.title === 'Rooms List') {
      this.title = 'Room List';
    }
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  constructor(private roomsService: RoomsService) {} //make it private so this is only accessable from typescript file only, no html

  ngOnInit(): void {
    // console.log(this.headerComponent);
    this.roomList = this.roomsService.getRooms();
  }

  ngAfterViewChecked(): void {}
  ngAfterViewInit(): void {
    // console.log(this.headerComponent);
    this.headerComponent.title = 'Rooms View';
    this.headerChildrenComponent.last.title = 'Last Title';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom2() {
    const room: RoomList = {
      roomId: 4,
      roomType: 'Budget Room',
      amenities: 'Free Wifi, TV',
      price: 200,
      photos:
        'https://images.unsplash.com/photo-1576354302919-96748cb8299e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      checkinTime: new Date('14-Nov-2021'),
      checkoutTime: new Date('16-Nov-2021'),
      rating: 1.6,
    };
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room]; //spread operator
  }
}
