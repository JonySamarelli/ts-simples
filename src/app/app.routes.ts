import { Routes } from '@angular/router';
import { SempreComponent } from './components/sempre/sempre.component';
import { SgpComponent } from './components/sgp/sgp.component';
import { EvaComponent } from './components/eva/eva.component';
import { NewContentComponent } from './components/new-content/new-content.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { HomeComponent } from './pages/home/home.component';
import { TsSimplesComponent } from './pages/ts-simples/ts-simples.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { 
        path: 'consulta', 
        component: ConsultaComponent,
        children: [
            { path: '', component: NewContentComponent },
            { path: 'sempre', component: SempreComponent} ,
            { path: 'sgp', component: SgpComponent },
            { path: 'eva', component: EvaComponent },
    
        ]
    },
    {
        path: 'ts-simples',
        component: TsSimplesComponent
    },
    { path: '**', redirectTo: 'home'},
];
