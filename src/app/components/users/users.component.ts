import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  isActive: boolean = true;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.users = [
        {
          firstName: "John",
          lastName: "Doe",
          age: 30,
          address: {
            street: "50th Main Street",
            city: "Boston",
            state: "MA"
          },
          joined: new Date("02/15/2018"),
          hide: true
        },
        {
          firstName: "Kayla",
          lastName: "Johnson",
          age: 25,
          address: {
            street: "12th Harold Street",
            city: "Brighton",
            state: "OK"
          },
          joined: new Date("02/21/2018"),
          hide: true
        },
        {
          firstName: "Henry",
          lastName: "Adams",
          age: 28,
          address: {
            street: "6th Broadway Street",
            city: "New York",
            state: "NY"
          },
          joined: new Date("03/01/2018"),
          hide: true
        }
      ];

      this.loaded = true;
      this.enableAdd = true;
    }, 2000);
  }

  addUser(user) {
    this.users.unshift(user);
  }

  toggleUser(user: User) {
    user.hide = !user.hide;
  }
}
