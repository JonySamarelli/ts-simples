import { Component, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { sempre } from '../../models/sempre';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sempre',
  standalone: true,
  imports: [TableModule],
  templateUrl: './sempre.component.html',
  styleUrl: './sempre.component.scss'
})
export class SempreComponent {
  info: sempre[] = [];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if(navigation && navigation.extras.state?.['dados']) {
      this.montarTabela(navigation.extras.state['dados']);
    }
  }

  montarTabela(dados: sempre[]) {
    dados.forEach((dado: sempre) => {
      this.info.push(new sempre(dado.appName, dado.email, dado.profileName, dado.userId));
    });
  }

}
