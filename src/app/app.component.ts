import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
import { CardGeneratorComponent } from './components/card-generator/card-generator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardGeneratorComponent],
  template: '<app-card-generator></app-card-generator>'
})
export class AppComponent {
  title = 'card-generator';
}