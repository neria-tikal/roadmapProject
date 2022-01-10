import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {

  public itemId = this.route.snapshot.params.id;
  
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log('this.route.snapshot.params.id', this.route.snapshot.params.id)
  
  }

}
