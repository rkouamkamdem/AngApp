import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-app',
  templateUrl: './first-app.component.html',
  styleUrls: ['./first-app.component.css']
})
export class FirstAppComponent implements OnInit {
  name: string;
  movies = MOVIES;
  movie = { title: "" };
  hasError: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onData(event: Event): void {
    let el = event.target as HTMLInputElement; //any; //HTMLElement;
    //let test = <HTMLElement>event.target;
    //console.log(event.target.value);
    this.name = el.value;
  }

  addFilm(): void {
    this.movies.push({ title: this.movie.title });
  }

onUpdate(movie): void {
  this.movie = movie;
}

onDelete(index): void {
  this.movies.splice(index,1);
}

  addMovie(){
    if( this.movie.title.trim() ){
      this.movies.push({ title: this.movie.title });
      this.movie.title ='';
      this.hasError = true;
    }else{
      
    }

  }

    vider(): void {
    this.movies = [];
    this.movies.length = 0;
  }

  selection():void {
    //this.movie = ;
  }

}

const MOVIES = [
  { title: 'Harry Potter' },
  { title: 'Les Hobbits' },
  { title: 'Les bronzés' },
  { title: 'La cité De La Peur' },
  { title: 'Chuck Norris En ' },
  { title: 'Star Wars' }  
];