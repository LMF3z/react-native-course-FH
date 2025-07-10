import { View, Text, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { useGetMovieByQuery } from '@/core/queries';

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
    <View>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

export default MovieScreen;
