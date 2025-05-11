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
      userId: postForm.value.userID,
      id: postForm.value.postID,
      title: postForm.value.postTitle,
      body: postForm.value.postBody,
    }
    this.posts.push(row)
    this.postForm.reset()
  }

  selectedPost(selectedPost: any) {
    this.postForm.setValue({
      userId: selectedPost['userId'],
      id: selectedPost['id'],
      title: selectedPost['title'],
      body: selectedPost['body']
    })
  }

  resetForm() {
    this.postForm.reset()
  }

}
