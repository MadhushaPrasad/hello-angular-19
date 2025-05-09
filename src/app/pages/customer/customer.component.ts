import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  imports: [FormsModule, CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {


  firstName: string = ""
  lastName: string = ""
  email: string = ""
  password: string = ""

  customers: any[] = [
    { id: "c001", firstName: "Madhusha", lastName: "Prasad", email: "madushaprasad21@gmail.com", password: "123456" },
    { id: "c002", firstName: "Kasun", lastName: "silva", email: "madushaprasad21@gmail.com", password: "123456" },
    { id: "c003", firstName: "Nimal", lastName: "perera", email: "madushaprasad2321@gmail.com", password: "123456" },
    { id: "c004", firstName: "kaml", lastName: "fernando", email: "madushaprasad3221@gmail.com", password: "123456" },
    { id: "c005", firstName: "danum", lastName: "lakshan", email: "madushap32rasad21@gmail.com", password: "123456" },
  ]


  submitForm() {
    console.log(this.firstName)
    console.log(this.lastName)
    console.log(this.email)
    console.log(this.password)
  }


  saveCustomer() {

    const row = {
      id: "c" + Math.floor(Math.random() * 1000),
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    }

    this.customers.push(row)

  }


}
