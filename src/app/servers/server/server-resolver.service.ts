import { Resolve,ActivatedRouteSnapshot,RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/observable";
import { ServersService } from "../servers.service";
import {Injectable} from '@angular/core';

interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class Serverresolver implements Resolve<Server> {
    constructor(private serverService: ServersService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<Server> | Promise<Server> | Server {

        return this.serverService.getServer(+route.params['id']);
    }
}