import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesListService } from '../list.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class DisplayPage implements OnInit {
  data: { name: string; director: string; description: string; };
  index: any;

  constructor(private route: ActivatedRoute,
    private moviesList: MoviesListService,
    private router: Router) 
    
    {
      this.route.queryParams.subscribe(params => {
          if (params && params.special) {
              this.index = JSON.parse(params.special);
              this.data = this.moviesList.searchMovie(this.index);
          }
      });
  }
  ngOnInit() {
  }
  onClick() {
    this.moviesList.delMovie(this.index);
}

}
