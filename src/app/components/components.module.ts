import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { ContadorComponent } from './contador/contador.component';
import { ListadoComponent } from './listado/listado.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
    declarations: [
        HeroesComponent,
        ListadoComponent,
        ContadorComponent
    ],
    exports: [
        ListadoComponent,
        HeroesComponent,
        ContadorComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ComponentsModule { }