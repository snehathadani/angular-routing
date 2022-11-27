import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  paramsSubscription: Subscription;
  user: {id: number, name: string};
//ActivatedRoute object we injected will give us access to the id passed in the url => selectedUser
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'], //all the params will be retrievable off the route
      name:  this.route.snapshot.params['name']
    }
    this.paramsSubscription = this.route.params.subscribe(//call subscribe method to observe
        (params: Params)=> { //params are observable that help u work with async tasks
          this.user.id = params['id'];//1st argument which is a func is executed or fired, when params change
          this.user.name = params['name'];//the fucn has params that change as an 1st argument
        }
    )
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
