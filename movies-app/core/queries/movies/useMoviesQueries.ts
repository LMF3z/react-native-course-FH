import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import {
  getMovieByIdAction,
  nowPlayingMoviesAction,
  popularMoviesAction,
  topRankedMoviesAction,
  upcomingMoviesAction,
} from '../../actions';
import { getMovieCreditsByIdAction } from '@/core/actions/movies/get-movie-credits-by-id.actions';

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
    queryFn: () => topRankedMoviesAction({ page: 5 }),
  });

export const useGetInfinityTopRankedMoviesQuery = () =>
  useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['top-ranked-movies-infinity'],
    queryFn: ({ pageParam = 1 }) => topRankedMoviesAction({ page: pageParam }),
    getNextPageParam: (_, allPages) => {
      return allPages.length + 1;
    },
    staleTime: 1000 * 60 * 60 * 24,
  });

export const useGetUpcomingMoviesQuery = () =>
  useQuery({
    queryKey: ['upcoming-movies'],
    staleTime: 1000 * 60 * 60 * 24,
    queryFn: upcomingMoviesAction,
  });

export const useGetMovieByQuery = (id: number) =>
  useQuery({
    queryKey: ['top-ranked-movies', id],
    staleTime: 1000 * 60 * 60 * 24,
    queryFn: () => getMovieByIdAction(id),
  });

export const useGetMovieCastByIDQuery = (id: number) =>
  useQuery({
    queryKey: ['movies-cast', id],
    staleTime: 1000 * 60 * 60 * 24,
    queryFn: () => getMovieCreditsByIdAction(id),
  });
