import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {



notFoundImg: string = "../../../assets/images/error/404.png";

  constructor() { }

  ngOnInit() {
  }

}
