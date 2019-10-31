import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MoviesListService {

    constructor(private alertController: AlertController) { }

    flag: boolean;
    fl = false;


    movies = [
         { name: 'Alita Battle Angel',  Released: 'Released on Febrauary 14,2019' },
        {name: 'Blue State Mountain', Released: 'Released on August 15, 2019'},
        { name: 'The Perfection',  Released: 'Released on May 24,2019' },
        {name: 'The Secret Life Of Pets 2', Released: 'Released on June 07, 2019'},
        { name: 'The Lion King',  Released: 'Released on July 19,2019' },
        { name: 'Toy Story 4',  Released: 'Released on June 21,2019' },
        { name: 'Lucky Day',  Released: 'Released on October 11,2019' },
        { name: 'The Influence',  Released: 'Released on October 11,2019' },
        { name: 'Fast And Furious Presents HOBBS & SHAW',  Released: 'Released on August 2,2019' },
        { name: 'Far from Home',  Released: 'Released on July 2,2019' },
        { name: 'Avengers Endgame',  Released: 'Released on April 26,2019' }
    ];
    addMovie(i: { name: string; released: string; }) {
        this.movies.push(i);
    }
    searchMovie(index: any) {
        return this.movies[index];
    }

    getAllMovies() {
        return this.movies;
    }

 

  
    delMovie(index: any) {
   
        {
            this.movies.splice(index, 1);
        }
    }
}
