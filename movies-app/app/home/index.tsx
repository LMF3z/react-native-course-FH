import { Text, View, ActivityIndicator, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRankedMoviesQuery,
  useGetUpcomingMoviesQuery,
} from '@/core/queries';
import { MainSlidesShow, MovieHorizontalList } from '@/core/components';

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { data: moviesData, isLoading } = useGetNowPlayingMoviesQuery();
  const { data: popularMovies, isLoading: popularLoading } =
    useGetPopularMoviesQuery();
  const { data: topMovies, isLoading: topLoading } =
    useGetTopRankedMoviesQuery();
  const { data: upcomingMovies, isLoading: upcomingLoading } =
    useGetUpcomingMoviesQuery();

  if (
    isLoading ||
    !moviesData ||
    !popularMovies ||
    popularLoading ||
    !topMovies ||
    topLoading ||
    !upcomingMovies ||
    upcomingLoading
  ) {
    return (
      <View className='flex-1 justify-center items-center'>
        <ActivityIndicator color={'purple'} size={40} />
      </View>
    );
  }

  return (
    <ScrollView className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>
      <Text className='text-3xl font-bold mx-4 mb-2'>Movies App</Text>

      <MainSlidesShow movies={moviesData || []} />

      <MovieHorizontalList
        movies={popularMovies || []}
        title='Populars'
        className='mb-5'
      />

      <MovieHorizontalList
        movies={topMovies || []}
        title='Best Ranking'
        className='mb-5'
      />

      <MovieHorizontalList movies={upcomingMovies || []} title='Coming soon' />
    </ScrollView>
  );
};

export default HomeScreen;
