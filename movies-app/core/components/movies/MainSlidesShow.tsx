import { View, useWindowDimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import { Movie } from '@/infrastructure';
import { MoviePosterCard } from './MoviePosterCard';

interface Props {
  movies: Movie[];
}

export const MainSlidesShow = ({ movies }: Props) => {
  const width = useWindowDimensions().width;

  return (
    <View className='h-[250px] w-full'>
      <Carousel
        data={movies}
        renderItem={({ item: movie }) => (
          <MoviePosterCard key={movie.id} id={movie.id} poster={movie.poster} />
        )}
        width={200}
        height={350}
        style={{
          width,
          height: 350,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        mode='parallax'
        // modeConfig={{
        //   parallaxScrollingScale: 0.8,
        //   parallaxScrollingOffset: 50,
        // }}
        defaultIndex={1}
      />
    </View>
  );
};
