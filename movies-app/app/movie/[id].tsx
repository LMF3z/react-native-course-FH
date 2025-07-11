import { View, ActivityIndicator, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { useGetMovieByQuery } from '@/core/queries';
import {
  ActorFlatList,
  MovieDescription,
  MovieHeader,
} from '@/core/components';

const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  const { data, isLoading } = useGetMovieByQuery(Number(id));

  if (!data || isLoading)
    return (
      <View className='flex-1 justify-center items-center'>
        <ActivityIndicator color={'purple'} size={40} />
      </View>
    );

  return (
    <ScrollView className='flex-1'>
      <MovieHeader
        poster={data.poster}
        originalTitle={data.originalTitle}
        title={data.title}
      />

      <MovieDescription movie={data} />

      <ActorFlatList movieId={Number(id)} />
    </ScrollView>
  );
};

export default MovieScreen;
