import { useQuery } from '@tanstack/react-query';

import {
  nowPlayingMoviesAction,
  popularMoviesAction,
  topRankedMoviesAction,
  upcomingMoviesAction,
} from '../../actions';

export const useGetNowPlayingMoviesQuery = () =>
  useQuery({
    queryKey: ['movies'],
    staleTime: 1000 * 60 * 60 * 24,
    queryFn: nowPlayingMoviesAction,
  });

export const useGetPopularMoviesQuery = () =>
  useQuery({
    queryKey: ['popular-movies'],
    staleTime: 1000 * 60 * 60 * 24,
    queryFn: popularMoviesAction,
  });

export const useGetTopRankedMoviesQuery = () =>
  useQuery({
    queryKey: ['top-ranked-movies'],
    staleTime: 1000 * 60 * 60 * 24,
    queryFn: topRankedMoviesAction,
  });

export const useGetUpcomingMoviesQuery = () =>
  useQuery({
    queryKey: ['upcoming-movies'],
    staleTime: 1000 * 60 * 60 * 24,
    queryFn: upcomingMoviesAction,
  });
