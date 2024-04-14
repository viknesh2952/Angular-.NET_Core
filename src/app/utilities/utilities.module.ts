import { NgModule } from '@angular/core';

import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { SidebarModule } from 'primeng/sidebar';
import { AccordionModule } from 'primeng/accordion';

import { EnterKeyDirective } from './directives/enter-key.directive';
import { CachePipe } from './pipes/cache.pipe';
import { FilterpipePipe } from './pipes/filterpipe.pipe';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [
    FilterpipePipe,CachePipe,EnterKeyDirective, HighlightDirective
  ],
  imports: [
    DividerModule,MenuModule,ButtonModule,InputTextModule,PanelModule,SidebarModule,AccordionModule
  ],
  exports: [
    DividerModule,MenuModule,ButtonModule,InputTextModule,PanelModule,SidebarModule,AccordionModule,
    FilterpipePipe,CachePipe,
    EnterKeyDirective,HighlightDirective
  ]
})
export class UtilitiesModule { }
