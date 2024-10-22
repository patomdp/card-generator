import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GeminiService } from '../../services/gemini.service';
// import { Inject } from '@angular/core';

@Component({
  selector: 'app-card-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card-generator.component.html',
  styleUrls: ['./card-generator.component.css']
})
export class CardGeneratorComponent {
  prompt: string = '';
  selectedValue: number = 0;
  selectedIcon: string = '';
  generatedImageUrl: string = '';
  icons: string[] = ['😀', '😎', '🚀', '💡', '🌟'];

  constructor(private geminiService: GeminiService) {}

  generateCard() {
    console.log('Generating card with prompt:', this.prompt);
    this.geminiService.generateImage(this.prompt).subscribe({
      next: (response) => {
        console.log('Image generated:', response);
        this.generatedImageUrl = response.image?.url || 'https://placehold.co/300x300';
      },
      error: (error) => {
        console.error('Error generating image:', error);
        this.generatedImageUrl = 'https://placehold.co/300x300';
      }
    });
  }
}