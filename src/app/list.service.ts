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
        { name: 'Terminator', description: 'Released on October 23,2019' },
        { name: 'ZomieLand', description: 'Released on October 9,2019' },
        { name: 'Rambo', description: 'Released on October 18,2019' },
        { name: 'Abominable', description: 'Released on October 7,2019' },
    ];
    addMovie(i: { name: string; description: string; }) {
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
