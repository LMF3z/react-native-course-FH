import { useRef, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

import { Movie } from '@/infrastructure';
import { MoviePosterCard } from './MoviePosterCard';

interface Props {
  title?: string;
  movies: Movie[];
  className?: string;

  loadNextPage?: () => void;
}

export const MovieHorizontalList = ({
  title,
  movies,
  className,
  loadNextPage,
}: Props) => {
  const isLoadingRef = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoadingRef.current = false;
    }, 200);
  }, [movies]);

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoadingRef.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoadingRef.current = true;

    loadNextPage && loadNextPage();
  };

  return (
    <View className={`${className}`}>
      {title && <Text className='text-2xl font-bold px-4'>{title}</Text>}

      <FlatList
        horizontal
        renderItem={({ item: movie }) => (
          <MoviePosterCard id={movie.id} poster={movie.poster} smallPoster />
        )}
        data={movies}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
      />
    </View>
  );
};
