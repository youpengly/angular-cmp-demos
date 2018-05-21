import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsetComponent } from './tabset.component';
import { TabDirective } from './tab.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TabsetComponent,
    TabDirective
  ],
  exports: [
    TabsetComponent,
    TabDirective
  ]
})
export class TabModule { }
