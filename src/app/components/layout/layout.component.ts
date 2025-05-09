import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { SidemenuComponent } from "../../shared/components/sidemenu/sidemenu.component";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, SidemenuComponent,RouterOutlet,CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
  