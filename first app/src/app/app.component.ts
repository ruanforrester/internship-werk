import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `
    <Main>
   <header class="brand-name">
    <img class= "brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
   </header>
   <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
   </Main> `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
