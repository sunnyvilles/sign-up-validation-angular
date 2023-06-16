import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  type!: string;
  message!: string;

  constructor(private route: ActivatedRoute) {
    this.type = this.route.snapshot.params['type'];
    this.message = this.route.snapshot.params['message'];
  }
}
