import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent}
    ]},
   
    {path: 'servers', 
    // canActivate:[AuthGuard],//you can't go to servers tab
    canActivateChild: [AuthGuard],// protect a single route or all child routes with this you can go to servers but not to single servers
     component: ServersComponent,
      children: [
      {path: ':id', component:ServerComponent},
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}//angular will run this guard everytime a user will try and navigate away
    ] },
    // {path:'not-found', component: PageNotFoundComponent},
    {path:'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
    {path:'**', redirectTo: '/not-found'}//make sure this is last. If in the beginning you will be always getting redirected
    /*
    { path: '', redirectTo: '/somewhere-else', pathMatch: 'full' } 
  
  Now, you only get redirected, if the full path is ''  (so only if you got NO other content in your path in this example)*/
  ]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule] //this tells angular
})

export class AppRoutingModule{}