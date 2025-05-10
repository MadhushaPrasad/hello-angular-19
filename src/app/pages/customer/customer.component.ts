import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer',
  imports: [FormsModule, CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {

  @ViewChild('customerForm')
  customerForm!: NgForm;

  firstName: string = ""
  lastName: string = ""
  email: string = ""
  password: string = ""

  customers: any[] = []

  ngOnInit(): void {

  }

  saveCustomer(customerForm: NgForm) {
    const row = {
      id: "c" + Math.floor(Math.random() * 1000),
      firstName: customerForm.value.firstName,
      lastName: customerForm.value.lastName,
      email: customerForm.value.email,
      password: customerForm.value.password
    }
    this.customers.push(row)
    this.customerForm.reset()
  }

  selectedCustomer(selectedCustomer: any) {
   this.customerForm.setValue({
      firstName: selectedCustomer['firstName'],
      lastName: selectedCustomer['lastName'],
      email: selectedCustomer['email'],
      password: selectedCustomer['password']
    })
  }

  resetForm() {
    this.customerForm.reset()
  }


}
