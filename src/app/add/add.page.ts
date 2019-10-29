import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ListService } from '../list.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss']
})
export class AddPage implements OnInit {
    name: string;
    des: string;

    constructor(private moviesList: MoviesListService, private router: Router) { }

  ngOnInit() {
  }
    addingMovie() {
        const i = {
            name: this.name,
            description: this.des
        };
        this.moviesList.addMovie(i);
        this.router.navigate(['/home']);
    }

}
