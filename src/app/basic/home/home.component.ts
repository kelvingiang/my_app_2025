import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  list = [
    'check-circle',
    'check',
    'check-circle-o',
    'cross-circle',
    'cross',
    'cross-circle-o',
    'up',
    'down',
    'left',
    'right',
    'ellipsis',
    'loading',
    'search'
  ];

  constructor() { }

  ngOnInit() {
  }

  data = this.list.map(item => ({
    icon: item,
    text: item
  }));

}
