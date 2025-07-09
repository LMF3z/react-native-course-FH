import { useQuery } from '@tanstack/react-query';

import { nowPlayingMoviesAction } from '../../actions';

export const useGetNowPlayingMoviesQuery = () =>
  useQuery({
    queryKey: ['movies'],
    staleTime: 1000 * 60 * 60 * 24,
    queryFn: nowPlayingMoviesAction,
  });
