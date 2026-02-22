import { Component, signal } from '@angular/core';
import { FormCto } from "./components/form-cto/form-cto";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormCto],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sistema-cto-front');
}
