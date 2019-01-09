import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  service_6_show=false;
  constructor() { }

  ngOnInit() {
  }
  more_less(){
  this.service_6_show=!this.service_6_show;
  }
}
