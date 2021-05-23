import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* import {NavbarComponent} from './components/navbar/navbar.component';
 */import {FindrepoComponent} from './components/findrepo/findrepo.component';
import {FinduserComponent} from './components/finduser/finduser.component';
import {MyprofileComponent} from './components/myprofile/myprofile.component';


const routes: Routes = [
  {path: 'profile', component:MyprofileComponent},
  { path: 'repo', component: FindrepoComponent},
  { path: 'user', component: FinduserComponent},
  { path: '', redirectTo:"/profile", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
