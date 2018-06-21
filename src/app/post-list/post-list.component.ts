import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { PostsService } from '../posts.service';
import { User } from '../user.model';
import { Post } from '../post.model';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostsService, UsersService]
})
export class PostListComponent implements OnInit {
  userId: string;
  posts: any[] = [];

  constructor(private route: ActivatedRoute, private postsService: PostsService, private usersService: UsersService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.userId=urlParameters['id'];
    });

    let post;
    var foundPosts = this.postsService.getPostsOfthisUser(this.userId);
    var componentScope = this;

    setTimeout(function(){
      foundPosts.forEach(function(foundPost){
          componentScope.posts.push(foundPost);
        });
      }, 1000);

  }

  commentPost(userpost: string) {
    let post = new Post(this.userId, userpost);
    this.postsService.addNewPost(post);
  }

}
