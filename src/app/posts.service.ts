import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Post } from './post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class PostsService {
  posts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.posts = database.list('posts/');
  }

  getPosts(){
    return this.posts;
  }

  addPost(newPost: Post) {
    this.posts.push(newPost);
  }

  getPostsOfthisUser(userId: string) {
    let output: string[] = [];
    this.posts.subscribe(data => {
      data.forEach(post => {
        console.log(post);
        if (post.userkey == userId) {
          output.push(post.userpost);
        }
      });
    });
    setTimeout(function(){console.log(output);}, 300);
    return output;
  }

  addNewPost(newPost: Post) {
    this.posts.push(newPost);
  }

}
