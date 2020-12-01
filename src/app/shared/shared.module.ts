import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider'
 import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatListModule } from '@angular/material/list';
import { UsersidebarComponent } from './usersidebar/usersidebar.component';
import { CarouselComponent } from './components/carousel/carousel.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    UsersidebarComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    
    
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    CarouselComponent
  ]
})
export class SharedModule { }
