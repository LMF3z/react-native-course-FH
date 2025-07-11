import { CompleteMovie } from '@/infrastructure';
import { Currencies } from '@/infrastructure/config/helpers/currencies';
import { View, Text } from 'react-native';

interface Props {
  movie: CompleteMovie;
}

export const MovieDescription = ({ movie }: Props) => {
  return (
    <View className='mx-5'>
      <View className='flex flex-row'>
        <Text>{movie.rating}</Text>
        <Text>
          {' '}
          - {movie.genres.map((genre) => (genre as any).name).join(', ')}
        </Text>
      </View>

      <Text className='font-bold mt-5'>Sinopsis</Text>
      <Text className='font-normal mt-2 '>{movie.description}</Text>

      <Text className='font-bold mt-2 text-2xl'>
        Budget: {Currencies.format(movie.budget)}
      </Text>
    </View>
  );
};
