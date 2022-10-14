import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup-my-call',
  templateUrl: './pickup-my-call.component.html',
  styleUrls: ['./pickup-my-call.component.scss'],
})
export class PickupMyCallComponent implements OnInit {
 @Input() hasHeader: boolean;
 @Input() hasFooter: boolean;

  constructor() { }

  ngOnInit() {}

}
