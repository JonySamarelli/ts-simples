import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MenuComponent, ConsultaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'material-grid';

  constructor(public router: Router) {
    this.router.navigate(['home']);
  }

  home() {
    this.router.navigate(['home']);
    console.log(this.router.url);
  }
}
