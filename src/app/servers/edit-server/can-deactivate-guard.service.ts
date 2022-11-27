import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

//this interface will require one thing from a component that implements it, i.e. that component must have a canDeactivate method
export interface CanComponentDeactivate {
    //define a type of canDeactivate method only what it looks like no logic
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
//candeactivate is an interface provided by angular-router
// /CanDeactivate is a generic type that will wrap our interface CanComponentDeactivate
//this will make sure that later we can easily connect the componnet to CanDeactivateGuard 
//the CanDeactivateGuard must also have canDeactivate method with will be called by angular router when user tries to navigate away

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    //component : the componentw e are currently on as an argument i.e. the component which has the interface implemented i.e. has canDeactivate method
    //
    canDeactivate(component: CanComponentDeactivate,
                    currentRoute: ActivatedRouteSnapshot,
                    currentState: RouterStateSnapshot,
                    nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                        //want to call canDeactivate on the componnet we are currently on
                        //we need the connection between the guard and component
                        return component.canDeactivate()
                    }
}