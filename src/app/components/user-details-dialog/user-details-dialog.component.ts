import { Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from 'src/app/pages/posts/posts.interfaces';


@Component({
  selector: 'app-user-details-dialog',
  templateUrl: './user-details-dialog.component.html',
  styleUrls: ['./user-details-dialog.component.scss']
})
export class UserDetailsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {user: User}) {}

  ngOnInit(): void {
    console.log('user from dialog', this.data.user);
  }

}
