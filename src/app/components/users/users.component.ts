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
          },
          image: "https://placeimg.com/600/600/people/1"
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
          image: "https://placeimg.com/600/600/people/2"
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
          image: "https://placeimg.com/600/600/people/3"
        }
      ];

      this.loaded = true;
    }, 2000);

  }

  addUser(user) {
    this.users.unshift(user);
  }
}
