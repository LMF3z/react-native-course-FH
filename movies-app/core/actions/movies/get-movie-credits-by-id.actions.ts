import { movieApi } from '@/core/api';
import {
  Cast,
  MovieCastResponse,
} from '@/infrastructure/interfaces/cast.interface';
import { MovieCastMapper } from '@/infrastructure/mappers/movie-cast-mapper';

export const getMovieCreditsByIdAction = async (
  id: number | string
): Promise<Cast[]> => {
  try {
    const { data } = await movieApi.get<MovieCastResponse>(`/${id}/credits`);

    return data.cast.map((cast) =>
      MovieCastMapper.fromTheMovieDbCastToCast(cast)
    );
  } catch (error) {
    console.log('error getMovieCreditsByIdAction: ', error);

    throw Error('Cannot load movies cast');
  }
};
