import { movieApi } from '@/core/api';
import { Movie, MovieDbResponse, MovieMapper } from '@/infrastructure';

export const upcomingMoviesAction = async (): Promise<Movie[]> => {
  try {
    const { data } = await movieApi.get<MovieDbResponse>('/upcoming');

    return data.results.map((movie) =>
      MovieMapper.fromTheMovieDbToMovie(movie)
    );
  } catch (error) {
    console.log('error nowPlayingMoviesAction: ', error);

    throw Error('Cannot load now playing movies');
  }
};
