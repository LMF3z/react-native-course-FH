import { movieApi } from '@/core/api';
import { Movie, MovieDbResponse, MovieMapper } from '@/infrastructure';

interface Options {
  page?: number;
  limit?: number;
}

export const topRankedMoviesAction = async ({
  page = 1,
  limit = 10,
}: Options): Promise<Movie[]> => {
  try {
    const { data } = await movieApi.get<MovieDbResponse>('/top_rated', {
      params: { page },
    });

    return data.results.map((movie) =>
      MovieMapper.fromTheMovieDbToMovie(movie)
    );
  } catch (error) {
    console.log('error nowPlayingMoviesAction: ', error);

    throw Error('Cannot load now playing movies');
  }
};
