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
    this.form.setValue(selectedPost)
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
    this.postService.savePost(this.form.value).subscribe((response: boolean) => {
      if (response) {
        alert('Post saved successfully');
      } else {
        alert('Post not saved');
      }
      this.form.reset();
    });
  }

  updatePost() {
    this.postService.updatePost(this.form.value).subscribe((response: boolean) => {
      if (response) {
        alert('Post updated successfully');
      } else {
        alert('Post not updated');
      }
      this.form.reset();
    });
  }

  deletePost(id: string) {
    this.postService.deletePost(id).subscribe((response: boolean) => {
      if (response) {
        alert('Post deleted successfully');
      } else {
        alert('Post not deleted');
      }
      this.form.reset();
    });
  }

  getPostById() {
    this.postService.getPostById(this.form.value.id).subscribe((response: Post) => {
      if (response) {
        this.form.setValue({
          userId: response.userId,
          id: response.id,
          title: response.title,
          body: response.body
        })
      } else {
        alert('Post not fetched');
      }
    });
  }

}
