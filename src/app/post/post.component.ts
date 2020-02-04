import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IPost } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public posts : IPost[];

  constructor( private apiService: ApiService) { }

  ngOnInit() {
     this.apiService.getPosts().subscribe( (data : any) => {
       this.posts = data.data.children;
       console.log(data.data.children);
    } 
     );
  }

}
