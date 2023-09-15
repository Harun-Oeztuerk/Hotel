import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Room, RoomList } from './IRooms';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';

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
    this.title = 'Rooms List';
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  ngOnInit(): void {
    console.log(this.headerComponent);
    this.roomList = [
      {
        roomId: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wifi, TV',
        price: 500,
        photos:
          'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 4.5,
      },
      {
        roomId: 2,
        roomType: 'Super Deluxe Room',
        amenities: 'Pool, Air Conditioner, Free Wifi, TV',
        price: 750,
        photos:
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        checkinTime: new Date('11-Dec-2021'),
        checkoutTime: new Date('12-Dec-2021'),
        rating: 2.5,
      },
      {
        roomId: 3,
        roomType: 'Private Suite',
        amenities: 'Pool, Air Conditioner, Free Wifi, TV, Balcony, Bathtub',
        price: 2400,
        photos:
          'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        checkinTime: new Date('24-Dec-2021'),
        checkoutTime: new Date('28-Dec-2021'),
        rating: 3.5,
      },
    ];
  }
  constructor() {}
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
