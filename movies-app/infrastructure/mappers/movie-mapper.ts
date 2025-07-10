import { CompleteMovie, Movie } from '../interfaces/movie-interface';
import { MovieDbResponse, Result } from '../interfaces/moviedb-response';

export class MovieMapper {
  static fromTheMovieDbToMovie = (movie: Result): Movie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    };
  };

  static FromToCompleteMovie = (movie: Result): CompleteMovie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,

      budget: movie.budget,
      duration: movie.runtime,
      genres: movie.genres.map((genre) => genre),
      originalTitle: movie.original_title,
      productionCompanies: movie.production_companies.map((company) => company),
    };
  };
}
