import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Dynamic-Styling');

  bgColor="green"
  headingFontSize="70"

  headingSizeBig="80px"
  headingSizeSmall="40px"

  zoom=true;

  updateHeadingSize(){
    this.zoom = !this.zoom;
  }


}
