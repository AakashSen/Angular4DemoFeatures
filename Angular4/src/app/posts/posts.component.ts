import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from '../services/post.service';
import { NotFoundExceptiion } from '../common/not-found-exception';
import { Post } from './posts';
import { BadRequestError } from '../common/bad-inuput-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts : Post[];

  constructor(private service : PostService) {}

   ngOnInit() { 
      this.getPosts();
  }
   
  deletePost(post) {
    
    this.service.deletePost(345).subscribe( 
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
    },  
    error => {
         if (error instanceof NotFoundExceptiion){
            console.log('(error.status == 400')
            alert("This post has already been deleted");
         } else throw error
        
    });    
 }

   getPosts(){
    this.service.getPosts().subscribe(     
      response => {this.posts = response},    
      error => {
        if (error instanceof NotFoundExceptiion){
          alert('Not Found');
        } else if (error instanceof BadRequestError) {
          alert(error.actualError);
        } else throw error;      
        
      })
   }
   
   createPost(input : string) { 
       let post:Post = { id : 123 ,title : input, userId : 123, body : '' };
       this.service.createPost(post).subscribe( 
         response => {
          input = '';
           console.log('success')
             this.getPosts();
          //post.id = response.id;
          //this.posts.splice(0, 0 ,post);
          ;
        });
   }

   updatePost(post) {
     this.service.updatePost(post).subscribe( 
       response => {
        console.log(response);
      });    
   }

}
