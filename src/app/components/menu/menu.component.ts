import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Apllication } from '../../enum/apllication';
import { HttpClientService } from '../../services/http-client.service';
import { sgp } from '../../models/sgp';
import { Eva } from '../../models/eva';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})

export class MenuComponent {
  value: string = '';
  dadosParaSempre: any;
  buttonsEnabled = {sgp: false, eva: false, sempre: false};

  application = Apllication;

  private $btnSempre!: HTMLElement;
  private $btnSGP!: HTMLElement;
  private $btnEVA!: HTMLElement;

  constructor(private httpClient: HttpClientService<any>, private router: Router) { }

  search() {
    this.navigate(Apllication.HOME);
    if (this.value.includes('@') && this.value.includes('.')) {
      this.httpClient.getSempre(this.value).subscribe((data) => {
        this.dadosParaSempre = data;

        this.isProgramIdSGPEVA();
                
        if (this.dadosParaSempre.dadosSempre.length > 0) {
          this.enableButton([Apllication.SEMPRE]);
        }
        if (this.dadosParaSempre.dadosSgp.length > 0) {
          this.enableButton([Apllication.SGP]);
        }
        if (this.dadosParaSempre.dadosEva.length > 0) {
          this.enableButton([Apllication.EVA]);
        }
      });
    }
  }

  isProgramIdSGPEVA() {
    const t: any = []; 
    this.dadosParaSempre.dadosSgp.forEach((dado: sgp) => {
      dado.cadastradoEva = (this.dadosParaSempre.dadosEva.some((eva: Eva) => {
        if (dado.programId === eva.programId) {
          return true;
        }
        return false;
      }));
    });
    console.log(this.dadosParaSempre);
  }

  ngOnInit() {
    this.$btnSempre = document.getElementById('btn-sempre') as HTMLElement;
    this.$btnSGP = document.getElementById('btn-sgp') as HTMLElement;
    this.$btnEVA = document.getElementById('btn-eva') as HTMLElement;
    
    document.getElementById('username')?.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        this.search();
      }
    })

    this.$btnSempre.classList.add('menu__button--disabled');
    this.$btnSGP.classList.add('menu__button--disabled');
    this.$btnEVA.classList.add('menu__button--disabled');
  }

  navigate(url: Apllication) {
    this.$btnSempre?.classList.remove('menu__button--selected');
    this.$btnSGP?.classList.remove('menu__button--selected');
    this.$btnEVA?.classList.remove('menu__button--selected');

    switch (url) {
      case Apllication.SEMPRE:
        this.$btnSempre.classList.add('menu__button--selected');
        this.router.navigate(['consulta', 'sempre'], { state: { dados: this.dadosParaSempre.dadosSempre } });
        break;
      case Apllication.SGP:
        this.$btnSGP.classList.add('menu__button--selected');
        this.router.navigate(['consulta', 'sgp'], { state: { dados: this.dadosParaSempre.dadosSgp } });
        break;
      case Apllication.EVA:
        this.$btnEVA.classList.add('menu__button--selected');
        this.router.navigate(['consulta', 'eva'], { state: { dados: this.dadosParaSempre.dadosEva } });
        break;
      case Apllication.HOME:
        // this.value = '';
        this.dadosParaSempre = null;
        this.disableButton([Apllication.SEMPRE, Apllication.SGP, Apllication.EVA]);
        this.router.navigate(['consulta']);
        break;
      default:
        this.disableButton([Apllication.HOME]);
        break;
    }
  }

  getApplication() {
    return Apllication;
  }

  private enableButton(str: Apllication[]) {
    str.forEach((button: Apllication) => {
      switch (button) {
        case Apllication.SEMPRE:
          this.$btnSempre.classList.remove('menu__button--disabled');
          this.buttonsEnabled.sempre = true;
          // this.$btnSempre.click();
          break;
        case Apllication.SGP:
          this.$btnSGP.classList.remove('menu__button--disabled');
          this.buttonsEnabled.sgp = true;
          break;
        case Apllication.EVA:
          this.$btnEVA.classList.remove('menu__button--disabled');
          this.buttonsEnabled.eva = true;
          break;
        default:
          break;
      }
    });
  }

  private disableButton(str: Apllication[]) {
    str.forEach((button: Apllication) => {
      switch (button) {
        case Apllication.SEMPRE:
          this.$btnSempre.classList.add('menu__button--disabled');
          this.buttonsEnabled.sempre = false;
          break;
        case Apllication.SGP:
          this.$btnSGP.classList.add('menu__button--disabled');
          this.buttonsEnabled.sgp = false;
          break;
        case Apllication.EVA:
          this.$btnEVA.classList.add('menu__button--disabled');
          this.buttonsEnabled.eva = false;
          break;
        default:
          this.$btnEVA.classList.add('menu__button--disabled');
          this.$btnSGP.classList.add('menu__button--disabled');
          this.$btnSempre.classList.add('menu__button--disabled');
          this.buttonsEnabled.eva = false;
          this.buttonsEnabled.sgp = false;
          this.buttonsEnabled.sempre = false;
          break;
      }
    });
  }
}
