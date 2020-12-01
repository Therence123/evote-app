import { CardComponent } from './../../shared/components/card/card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PositionsComponent } from './../../modules/positions/positions.component';
import { CandidatesComponent } from './../../modules/candidates/candidates.component';
import { ElectionsComponent } from './../../modules/elections/elections.component';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from './../../shared/shared.module';
import { VotesComponent } from './../../modules/votes/votes.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
      VotesComponent,     
      ElectionsComponent,
      CandidatesComponent,
      PositionsComponent,
      CardComponent
      
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatDividerModule,
   
    
  ]
})
export class DefaultModule { }
