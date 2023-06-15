import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  messageType!: string;
  message!: string;

  constructor(private route: ActivatedRoute) {
    this.messageType = this.route.snapshot.params['messageType'];
    this.message = this.route.snapshot.params['message'];
  }
}
