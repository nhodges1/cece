import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { FooterComponent } from "./components/footer/footer.component";
import Aos from "aos";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavbarComponent, HeroComponent, FooterComponent]
})
export class AppComponent implements AfterViewInit {
  title = 'celesteApp';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngAfterViewInit() {
    // Check if the code is running in a browser environment
    if (isPlatformBrowser(this.platformId)) {
      // Initialize AOS here after the view has been initialized
      Aos.init();
    }
  }
}
