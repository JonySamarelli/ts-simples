import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Eva } from '../../models/eva';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eva',
  standalone: true,
  imports: [TableModule],
  templateUrl: './eva.component.html',
  styleUrl: './eva.component.scss'
})
export class EvaComponent {
  info: Eva[] = [
  ];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if(navigation && navigation.extras.state?.['dados']) {
      this.montarTabela(navigation.extras.state['dados']);
    }
  }

  montarTabela(dados: Eva[]) {
    dados.forEach((dado: Eva) => {
      this.info.push(new Eva(dado.email, dado.profileName, dado.programId, dado.programName,  dado.actorId, dado.userId, dado.userLogin));
    });
  }
}
