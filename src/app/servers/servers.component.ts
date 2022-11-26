import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
      private router: Router,
      private route: ActivatedRoute)  { }
//get currently active route which is of type route. It injects the currently active route
  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(){
    this.router.navigate(['/servers'], {relativeTo: this.route});//ActiveRouter angular knows currently activated route
    //relative to this route you should navigate and relative to that route all paths should be resolved
  }

}
