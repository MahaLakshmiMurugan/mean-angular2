import { Component, OnInit, OnDestroy } from "@angular/core";
import { Post } from '../post.model';
import { Subscription } from 'rxjs';
import { PostsService } from "../posts.service";

@Component ({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{
/*@Input() posts: Post[] = [
    {title: 'First Post', content: 'This is our first post'},
    {title: 'Second Post', content: 'This is our second post'},
    {title: 'Third Post', content: 'This is our third post'}
]; */
posts: Post[] = [];
private postsSub: Subscription;

constructor(public postsService: PostsService) {}

ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateLiscener()
        .subscribe((posts: Post[])=> {
            this.posts = posts;
        })
}

OnDelete(postId: string) {
    this.postsService.deletePost(postId);
}

ngOnDestroy() {
    this.postsSub.unsubscribe();
}
}