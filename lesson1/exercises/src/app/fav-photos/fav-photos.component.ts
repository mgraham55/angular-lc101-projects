import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://img.cinemablend.com/filter:scale/cb/a/e/e/7/1/1/aee7118fe6a36cdd210236719d9dcd942e7e2d88eafd284e3006c15a51c5c24c.jpg?fw=1200';
  image3 = 'https://lh3.googleusercontent.com/proxy/Q6nsqrC1BzoPMOq09ekklOhT0oaa_XfZXXHMhb9b7QHnvK2bIYv4Rb1OtFLMVE43aLIk1mZEa51mHAjaXtXlKha1V2skhRDjM7IflJ5PqVek61DKDuIlHSi9HNl5HyENXNl1lDBM05A';

  constructor() { }

  ngOnInit() {
  }

}