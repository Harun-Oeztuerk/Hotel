import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'HotelApp-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  // providers: [RoomsService], //use local instance of service
})
export class EmployeeComponent implements OnInit {
  empName: string = 'John';

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {}
}
