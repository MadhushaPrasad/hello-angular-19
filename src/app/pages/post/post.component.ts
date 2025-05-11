import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Post } from '../../dto/post';

@Component({
  selector: 'app-post',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {


  form: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(1)]),
    userId: new FormControl('', [Validators.required, Validators.minLength(1)]),
    title: new FormControl('', [Validators.required, Validators.minLength(1)]),
    body: new FormControl('', [Validators.required, Validators.minLength(1)])
  });

  posts: Post[] = []

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  selectedPost(selectedPost: any) {
    this.form.setValue({
      userId: selectedPost['userId'],
      id: selectedPost['id'],
      title: selectedPost['title'],
      body: selectedPost['body']
    })
  }

  resetForm() {
    this.form.reset()
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  savePost() {
  }

  // savePost(postForm: NgForm) {

  //   // this.postService.savePost(postForm).subscribe((response)=>{

  //   // });
  //   const row = {
  //     userId: postForm.value.userID,
  //     id: postForm.value.postID,
  //     title: postForm.value.postTitle,
  //     body: postForm.value.postBody,
  //   }
  //   this.posts.push(row)
  //   this.postForm.reset()
  // }

}
