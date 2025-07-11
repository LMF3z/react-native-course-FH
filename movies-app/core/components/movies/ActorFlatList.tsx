import { ActivityIndicator, FlatList, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useGetMovieCastByIDQuery } from '@/core/queries';
import { ActorCard } from './ActorCard';

interface Props {
  movieId: number;
}

export const ActorFlatList = ({ movieId }: Props) => {
  const insets = useSafeAreaInsets();
  const { data: actors, isLoading } = useGetMovieCastByIDQuery(movieId);

  if (!actors || isLoading)
    return (
      <View className='flex-1 justify-center items-center'>
        <ActivityIndicator color={'purple'} size={40} />
      </View>
    );

  return (
    <FlatList
      style={{ paddingBottom: insets.bottom }}
      data={actors}
      renderItem={({ item }) => <ActorCard actor={item} />}
      keyExtractor={(item, i) => `${item.id}-${i}`}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  );
};
