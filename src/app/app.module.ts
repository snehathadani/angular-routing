import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth-service';
import { AuthGuard } from './auth-guard.service';


// const appRoutes: Routes = [
//   {path: '', component: HomeComponent},
//   {path: 'users', component: UsersComponent, children: [
//     {path: ':id/:name', component: UserComponent}
//   ]},
 
//   {path: 'servers', component: ServersComponent, children: [
//     {path: ':id', component:ServerComponent},
//     {path: ':id/edit', component: EditServerComponent}
//   ] },
//   {path:'not-found', component: PageNotFoundComponent},
//   {path:'**', redirectTo: '/not-found'}//make sure this is last. If in the beginning you will be always getting redirected
//   /*
//   { path: '', redirectTo: '/somewhere-else', pathMatch: 'full' } 

// Now, you only get redirected, if the full path is ''  (so only if you got NO other content in your path in this example)*/
// ]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ServersService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
