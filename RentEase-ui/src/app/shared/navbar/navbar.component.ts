import { Component, OnInit } from '@angular/core';
import { SharedCommonModule } from '../common/common.module';

@Component({
  selector: 'app-navbar',
  styleUrl: './navbar.component.scss',
  imports:[SharedCommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
