import { movieApi } from '@/core/api';
import { Movie, MovieDbResponse, MovieMapper } from '@/infrastructure';

export const popularMoviesAction = async (): Promise<Movie[]> => {
  try {
    const { data } = await movieApi.get<MovieDbResponse>('/popular');

    return data.results.map((movie) =>
      MovieMapper.fromTheMovieDbToMovie(movie)
    );
  } catch (error) {
    console.log('error nowPlayingMoviesAction: ', error);

    throw Error('Cannot load now playing movies');
  }
};
