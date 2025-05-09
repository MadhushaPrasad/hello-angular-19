import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  imports: [FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {


  firstName: string = ""
  lastName: string = ""
  email: string = ""
  password: string = ""


  submitForm() {
   console.log(this.firstName)
   console.log(this.lastName)
   console.log(this.email)
   console.log(this.password)
  }


}
