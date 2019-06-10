import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbie: string [];
  hello: any;
  // constructor runs automatically
  constructor() { }

  // ngOnInit runs automaticaly
  ngOnInit() {
    this.name = 'Keketso Matsuma';
    this.age = 22;
    this.email = 'keketso@gmail.com';
    this.address = {
      street: 'Bolani Road',
      state: 'Gauteng',
      city: 'Johannesburg'
    };
    this.hobbie = ['Homeworks', 'Drawing', 'Reading'];
    this.hello = 'World';
  }
  onClick(formData) {
    console.log(formData);
    return false;

  }
}
interface Address {
  street: string;
  state: string;
  city: string;
}
