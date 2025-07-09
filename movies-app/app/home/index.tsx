import { Text, View, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useGetNowPlayingMoviesQuery } from '@/core/queries';
import { MainSlidesShow } from '@/core/components';

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { data: moviesData, isLoading } = useGetNowPlayingMoviesQuery();

  if (isLoading || !moviesData) {
    return (
      <View className='flex-1 justify-center items-center'>
        <ActivityIndicator color={'purple'} size={40} />
      </View>
    );
  }

  return (
    <View className='mt-2' style={{ paddingTop: safeArea.top }}>
      <Text className='text-3xl font-bold mx-4 mb-2'>Movies App</Text>

      <MainSlidesShow movies={moviesData || []} />
    </View>
  );
};

export default HomeScreen;
