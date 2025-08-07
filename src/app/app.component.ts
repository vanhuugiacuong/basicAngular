import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  
})
export class AppComponent {
  title = 'Introduction';

  onLearnMore() {
    alert('Thank you for your interest! More details coming soon.');
  }

  imgSrc = 'assets/info.png';
}
