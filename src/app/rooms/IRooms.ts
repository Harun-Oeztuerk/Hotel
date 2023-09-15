export interface Room {
  availableRooms?: number;
  bookedRooms?: number;
  totalRooms?: number;
  unavailableRooms?: number;
}

export interface RoomList {
    roomId: number;
    roomType : string;
    amenities: string;
    price: number;
    photos: string;
    checkinTime: Date;
    checkoutTime: Date;
    rating: number;
}