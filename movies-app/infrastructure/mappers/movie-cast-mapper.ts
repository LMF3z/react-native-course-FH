import {
  Cast,
  MovieCast,
  MovieCastResponse,
} from '../interfaces/cast.interface';
import { CompleteMovie, Movie } from '../interfaces/movie-interface';
import { MovieDbResponse, Result } from '../interfaces/moviedb-response';

export class MovieCastMapper {
  static fromTheMovieDbCastToCast = (movie: MovieCast): Cast => {
    return {
      id: movie.id,
      name: movie.name,
      character: movie.character ?? 'No character',
      avatar: movie.profile_path
        ? `https://image.tmdb.org/t/p/w500${movie.profile_path}`
        : 'https://i.stack.imgur.com/l60Hf.png',
    };
  };
}
