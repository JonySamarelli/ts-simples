import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { sgp } from '../../models/sgp';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sgp',
  standalone: true,
  imports: [TableModule],
  templateUrl: './sgp.component.html',
  styleUrl: './sgp.component.scss'
})
export class SgpComponent {
  info: sgp[] = [];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if(navigation && navigation.extras.state?.['dados']) {
      this.montarTabela(navigation.extras.state['dados']);
    }
  }

  montarTabela(dados: sgp[]) {
    dados.forEach((dado: sgp) => {
      this.info.push(new sgp(dado.programId, dado.nomeProduto, dado.actorId, dado.actorName, dado.character));
    });
  }
}
