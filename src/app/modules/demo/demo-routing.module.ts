import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './views/buttons/buttons.component';
import { FlexboxComponent } from './views/flexbox/flexbox.component';
import { SelectorsComponent } from './views/selectors/selectors.component';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'flexbox', component: FlexboxComponent },
  { path: 'selectors', component: SelectorsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
