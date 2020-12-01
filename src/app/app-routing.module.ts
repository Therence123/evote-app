import { ViewprofileComponent } from './modules/viewprofile/viewprofile.component';
import { NominationviewComponent } from './modules/nominationview/nominationview.component';
import { LoginComponent } from './modules/login/login.component';
import { PositionsComponent } from './modules/positions/positions.component';
import { CandidatesComponent } from './modules/candidates/candidates.component';
import { ElectionsComponent } from './modules/elections/elections.component';
import { RegisterComponent } from './modules/register/register.component';
import { VotesComponent } from './modules/votes/votes.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path:'index/nominations',
  component: NominationviewComponent,
},{
  path:'evote/register',
  component:RegisterComponent},{
    path:'evote/login',
    component: LoginComponent
  
},{
  path:'evote/logout',
  component: LoginComponent

},{ //evote/admin/main
  path:'',
  component: DefaultComponent,
  children: [{
    path:'dashboard',
    component: DashboardComponent
  },{
    path: 'voters',
    component: VotesComponent
  },{
    path:'elections',
    component: ElectionsComponent
  },{
    path:'candidates',
    component: CandidatesComponent
  },{
    path:'positions',
    component: PositionsComponent
  },{
    path:'profile',
    component: ViewprofileComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
