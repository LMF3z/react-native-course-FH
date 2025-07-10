import { movieApi } from '@/core/api';
import { CompleteMovie, MovieMapper, Result } from '@/infrastructure';

export const getMovieByIdAction = async (
  id: number | string
): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<Result>(`/${id}`);

    return MovieMapper.FromToCompleteMovie(data);
  } catch (error) {
    console.log('error nowPlayingMoviesAction: ', error);

    throw Error('Cannot load now playing movies');
  }
};
