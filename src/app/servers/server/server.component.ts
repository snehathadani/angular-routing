import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router:Router ) { }//to get access to navigate method

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);//convert the string to number for id
      }
    )
  }

  onEdit(){
    // this.router.navigate(['/servers', this.server.id, 'edit'])
    //No need to use this as we are already on this path
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'})//can use 'merge when merging new peoperties with old
  }
//when making a routing throuh html <a routerLink="..." queryParamsHandling="merge"> can be used
}
