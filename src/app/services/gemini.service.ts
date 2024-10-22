import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
  private apiKey = '##'; // Reemplaza con tu API key real

  constructor(private http: HttpClient) {}

  generateImage(prompt: string): Observable<any> {
    console.log('Generating image with prompt:', prompt);
    const body = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.4,
        topK: 32,
        topP: 1,
        maxOutputTokens: 4096,
      }
    };

    return this.http.post(`${this.apiUrl}?key=${this.apiKey}`, body).pipe(
      catchError(error => {
        console.error('Error in API call:', error);
        return of({ image: { url: 'https://placehold.co/300x300' } });
      })
    );
  }
}
