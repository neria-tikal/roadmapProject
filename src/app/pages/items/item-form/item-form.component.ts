import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
  
  public formType = 'add';
  public itemId = this.route.snapshot.params.id;

  constructor(
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    console.log('this.itemId', this.itemId)
    if (this.itemId) {
      this.formType = 'edit';
    }
  }

}
