import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../../component/menu/menu.component';

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent {

}
