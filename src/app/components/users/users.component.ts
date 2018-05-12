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
          }
        },
        {
          firstName: "Kayla",
          lastName: "Johnson",
          age: 25,
          address: {
            street: "12th Harold Street",
            city: "Brighton",
            state: "OK"
          }
        },
        {
          firstName: "Henry",
          lastName: "Admas",
          age: 28,
          address: {
            street: "6th Broadway Street",
            city: "New York",
            state: "NY"
          }
        }
      ];

      this.loaded = true;
    }, 2000);

    this.showExtended = false;

    // this.addUser({
    //   firstName: "Mira",
    //   lastName: "Kalyan",
    //   age: 22,
    //   address: {
    //     street: "Harison Street",
    //     city: "Princeton",
    //     state: "NJ"
    //   }
    // });
  }

  addUser(user) {
    this.users.unshift(user);
  }
}
