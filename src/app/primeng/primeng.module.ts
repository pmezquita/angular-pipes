import {NgModule} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {MenubarModule} from "primeng/menubar";
import { FieldsetModule } from 'primeng/fieldset';
import {PanelModule} from "primeng/panel";
import {ToolbarModule} from "primeng/toolbar";
import {TableModule} from "primeng/table";


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    PanelModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimengModule {
}
