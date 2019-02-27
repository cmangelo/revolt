import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [SidebarComponent, HeaderComponent]
})
export class CoreModule { }
