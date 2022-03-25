import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NotfoundComponent } from './component/notfound/notfound.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'about',
    loadChildren:() => import('src/app/view/about/about.module').then(m => m.AboutModule)
  },
  {
    path:'contacts',
    loadChildren:() => import('src/app/view/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path:'projects',
    loadChildren:() => import('src/app/view/projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path:'skils',
    loadChildren:() => import('src/app/view/skils/skils.module').then(m => m.SkilsModule)
  },
  {
   path:'**',
   component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
