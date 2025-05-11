import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-post',
  imports: [FormsModule,CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  @ViewChild('postForm')
  postForm!: NgForm;

  posts: any[] = []

  ngOnInit(): void { }

  savePost(postForm: NgForm) {
    const row = {
      id: "c" + Math.floor(Math.random() * 1000),
      firstName: postForm.value.firstName,
      lastName: postForm.value.lastName,
      email: postForm.value.email,
      password: postForm.value.password
    }
    this.posts.push(row)
    this.postForm.reset()
  }

  selectedPost(selectedPost: any) {
    this.postForm.setValue({
      user: selectedPost['firstName'],
      lastName: selectedPost['lastName'],
      email: selectedPost['email'],
      password: selectedPost['password']
    })
  }

  resetForm() {
    this.postForm.reset()
  }

}
