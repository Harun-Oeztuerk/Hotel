import {
  Component,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  ElementRef,
  OnInit,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'HotelApp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Hotel';

  @ViewChild('name', { static: true }) name!: ElementRef;
  ngOnInit(): void {
    console.log();
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
