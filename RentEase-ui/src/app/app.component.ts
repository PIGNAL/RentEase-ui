import { Component } from '@angular/core';
import { SharedCommonModule } from './shared/common/common.module';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports:[SharedCommonModule, NavbarComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
}
