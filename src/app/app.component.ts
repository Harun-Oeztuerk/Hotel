import {
  Component,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  ElementRef,
  OnInit,
  Optional,
  Host,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { RoomsService } from './rooms/services/rooms.service';

@Component({
  selector: 'HotelApp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [RoomsService],
})
export class AppComponent implements OnInit {
  title = 'Hotel';

  @ViewChild('name', { static: true }) name!: ElementRef;

  constructor(@Optional() private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.loggerService?.log('AppComponent.ngOnInit()');
    this.name.nativeElement.innerText = 'Hilton Hotel';
  }

  //AfterViewInit and template reference example
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }

  // role = 'Admin';
}
