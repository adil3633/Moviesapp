import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MoviesListService } from '../list.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    movies: { name: string;  description: string; }[];
    constructor(private moviesList: MoviesListService,
        private router: Router) { }

    // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit() {
        this.movies = this.moviesList.getAllMovies();
    }
    onClik() {
        this.router.navigate(['/add-movie']);
    }
    onClick(i: any) {
        let navExtras: NavigationExtras = {
            queryParams: {
                special: JSON.stringify(i)
            }
        };
        this.router.navigate(['/display'], navExtras);
    }

    delete(nme: any) {
        this.moviesList.delMovie(nme);
    }

}
