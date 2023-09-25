import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../IRooms';
// import { APP_SERVICE_CONFIG } from "../../AppConfig/appconfig.service"
// import { AppConfig } from '../../AppConfig/appconfig.interface';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [
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
  ];//use global instance of service

  constructor(/*@Inject(APP_SERVICE_CONFIG) private config: AppConfig*/) {
    // console.log(this.config.apiEndpoint);
    console.log("Rooms Service Initialized...");
  }

  getRooms() {
    return this.roomList;
  }
}
