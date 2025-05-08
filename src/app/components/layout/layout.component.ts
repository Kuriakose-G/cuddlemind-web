import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { SidemenuComponent } from "../../shared/components/sidemenu/sidemenu.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, SidemenuComponent,RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
  