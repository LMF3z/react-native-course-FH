import { Movie } from '@/infrastructure';
import { View, Text, FlatList } from 'react-native';
import { MoviePosterCard } from './MoviePosterCard';

interface Props {
  title?: string;
  movies: Movie[];
  className?: string;
}

export const MovieHorizontalList = ({ title, movies, className }: Props) => {
  return (
    <View className={`${className}`}>
      {title && <Text className='text-2xl font-bold px-4'>{title}</Text>}

      <FlatList
        horizontal
        renderItem={({ item: movie }) => (
          <MoviePosterCard id={movie.id} poster={movie.poster} smallPoster />
        )}
        data={movies}
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
